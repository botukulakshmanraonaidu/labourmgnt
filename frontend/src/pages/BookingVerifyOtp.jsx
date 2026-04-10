import { useState, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { postJson } from "../utils/api.js";

export default function BookingVerifyOtp() {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputs = useRef([]);

  const email = location.state?.customer_email || "your registered email";

  const handleChange = (e, idx) => {
    const val = e.target.value;
    if (isNaN(val)) return;

    const newOtp = [...otp];
    newOtp[idx] = val.substring(val.length - 1);
    setOtp(newOtp);

    if (val && idx < 3) {
      inputs.current[idx + 1].focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputs.current[idx - 1].focus();
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const otpString = otp.join("");
    if (otpString.length < 4) {
      setError("Please enter the full 4-digit code");
      setLoading(false);
      return;
    }

    try {
      const response = await postJson("/booking/verify-otp/", { otp: otpString });
      navigate("/booking/success", { state: { booking: response.booking } });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-4)' }}>
            <Link to="/booking" className="nav-back-btn">
                <span>←</span> Back
            </Link>
            <h2 className="title-font">
                LabourMgnt <span style={{ color: 'var(--accent)', fontWeight: 400 }}>Hub</span>
            </h2>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
        </div>
      </nav>

      <main className="content-wrapper animate-fade-in mesh-bg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 'var(--s-16) 5%' }}>
        <div className="form-card glass-panel" style={{ maxWidth: '480px', margin: 0, padding: 'var(--s-12)' }}>
          <div className="text-center mb-10">
            <span className="status-pill mb-4" style={{ backgroundColor: 'rgba(99, 102, 241, 0.05)', color: 'var(--primary)', border: '1px solid var(--border)' }}>Security Protocol</span>
            <h2 className="form-title title-font" style={{ fontSize: '2.5rem', marginBottom: 'var(--s-2)', color: 'var(--primary)' }}>Confirm Booking</h2>
            <p className="form-subtitle">
              A high-security confirmation code has been dispatched to <br /><strong style={{ color: 'var(--primary)' }}>{email}</strong>.
            </p>
          </div>
          
          <form onSubmit={onSubmit}>
            <div style={{ display: 'flex', gap: 'var(--s-4)', justifyContent: 'center', marginBottom: 'var(--s-12)' }}>
              {otp.map((digit, idx) => (
                <input
                  key={idx}
                  ref={(el) => (inputs.current[idx] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className="animate-fade-in"
                  style={{
                    width: '64px',
                    height: '84px',
                    textAlign: 'center',
                    fontSize: '2rem',
                    fontWeight: '800',
                    borderRadius: 'var(--s-3)',
                    border: '1px solid var(--border)',
                    backgroundColor: '#fff',
                    color: 'var(--primary)',
                    boxShadow: 'var(--shadow-sm)',
                    animationDelay: `${idx * 0.08}s`
                  }}
                  required
                />
              ))}
            </div>

            <button type="submit" disabled={loading} style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '1.25rem', width: '100%', fontSize: '1.1rem' }}>
              {loading ? <div className="spinner"></div> : "Verify & Secure Reservation"}
            </button>
            
            {error && <p className="error-msg text-center mt-6">{error}</p>}
            
            <p className="text-center mt-10" style={{ fontSize: '0.9rem' }}>
              Authentication issue? <button type="button" onClick={() => navigate('/booking')} style={{ background: 'none', border: 'none', color: 'var(--accent)', fontWeight: 700, cursor: 'pointer', padding: 0 }}>Restart Booking Protocol</button>
            </p>
          </form>
        </div>
      </main>

      <footer className="footer" style={{ border: 'none', background: 'transparent' }}>
        <p style={{ fontWeight: 600, fontSize: '0.85rem', opacity: 0.8, color: 'var(--primary)' }}>&copy; 2026 Labour Management Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
}