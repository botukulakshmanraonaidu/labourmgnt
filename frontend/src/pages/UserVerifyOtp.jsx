import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { postJson } from "../utils/api.js";

export default function UserVerifyOtp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputs = useRef([]);

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
      setError("Please enter the full 4-digit OTP");
      setLoading(false);
      return;
    }

    try {
      await postJson("/users/verify-otp/", { otp: otpString });
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <nav className="navbar" style={{ 
        position: 'absolute', 
        background: 'transparent', 
        border: 'none', 
        zIndex: 100,
        padding: 'var(--s-6) 5%',
        display: 'flex',
        alignItems: 'center'
      }}>
        <h2 className="title-font" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>
          LabourMgnt <span style={{ color: 'var(--accent)', fontWeight: 400 }}>Hub</span>
        </h2>
        <div className="nav-links" style={{ gap: 'var(--s-6)', marginLeft: 'var(--s-8)', background: 'rgba(15, 23, 42, 0.05)', padding: 'var(--s-2) var(--s-4)', borderRadius: '2rem', backdropFilter: 'blur(10px)' }}>
          <Link to="/" style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Home</Link>
          <Link to="/users/login" style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Login</Link>
        </div>
      </nav>

      <main className="content-wrapper animate-fade-in mesh-bg" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div className="form-card glass-panel" style={{ maxWidth: '440px', margin: 0, padding: 'var(--s-12)' }}>
          <div className="text-center mb-10">
            <span className="status-pill mb-4" style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)', color: 'var(--accent)' }}>Security Protocol</span>
            <h2 className="form-title title-font" style={{ fontSize: '2.5rem', marginBottom: 'var(--s-2)' }}>Verify Security OTP</h2>
            <p className="form-subtitle">
              A secure 4-digit access code has been dispatched to your email. Enter it below to proceed.
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

            <button type="submit" disabled={loading} style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '1.125rem', width: '100%', fontSize: '1.1rem' }}>
              {loading ? <div className="spinner"></div> : "Finalize Verification"}
            </button>
            
            {error && <p className="error-msg text-center mt-6">{error}</p>}
            
            <p className="text-center mt-10" style={{ fontSize: '0.9rem' }}>
              Didn't receive the code? <button type="button" onClick={() => navigate('/users/login')} style={{ background: 'none', border: 'none', color: 'var(--accent)', fontWeight: 700, cursor: 'pointer', padding: 0 }}>Resend Protocol</button>
            </p>
          </form>
        </div>
      </main>

      <footer className="footer" style={{ border: 'none', background: 'transparent' }}>
        <p style={{ fontWeight: 500, fontSize: '0.85rem', opacity: 0.6 }}>&copy; 2026 Labour Management Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
}