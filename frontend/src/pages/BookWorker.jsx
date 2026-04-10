import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { postJson } from "../utils/api.js";

export default function BookWorker() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    service_type: "",
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    customer_address: "",
    problem_description: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await postJson("/booking/", form);
      navigate("/booking/verify-otp", { state: { customer_email: form.customer_email } });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container mesh-bg">
      {/* Navbar Aligned to Reference Standard */}
      <nav className="navbar" style={{ border: 'none', background: 'transparent', padding: 'var(--s-6) 5%' }}>
        <h2 className="title-font" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', color: 'var(--primary)' }}>
          LabourMgnt <span style={{ color: 'var(--accent)', fontWeight: 400 }}>Hub</span>
        </h2>
        <div className="nav-links" style={{ gap: 'var(--s-8)' }}>
          <Link to="/" style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Home</Link>
          <Link to="/portal" style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Portal</Link>
          <Link to="/services" className="btn" style={{ color: 'var(--accent)', fontWeight: 700, background: 'var(--accent-soft)', padding: '0.5rem 1.25rem', borderRadius: '2rem', fontSize: '0.8rem', width: 'auto' }}>EXPERTISE HUB</Link>
        </div>
      </nav>

      <main className="content-wrapper animate-fade-in" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--s-12) 5%' }}>
        <div className="form-card glass-panel" style={{ maxWidth: '800px', margin: 0, padding: 'var(--s-16)', borderRadius: '2.5rem', boxShadow: 'var(--shadow-premium)', background: 'white' }}>
          <div className="text-center mb-12">
            <span className="status-pill mb-4" style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)' }}>Priority Deployment</span>
            <h2 className="title-font" style={{ fontSize: '2.5rem', marginBottom: 'var(--s-2)', color: 'var(--primary)' }}>Book Elite Specialist</h2>
            <p className="form-subtitle" style={{ fontSize: '1.05rem', color: 'var(--text-muted)' }}>
              Provide your deployment details to synchronize with a verified unit expert.
            </p>
          </div>
          
          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-6)' }}>
            <div className="form-group">
              <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 800, color: 'var(--primary)' }}>Specialization Category</label>
              <select name="service_type" value={form.service_type} onChange={onChange} required style={{ padding: '0.875rem 1.25rem', borderRadius: 'var(--s-3)', fontSize: '1rem', background: '#fafafa', border: '1px solid var(--border)' }}>
                <option value="">Select Specialization</option>
                <option value="electrician">Electrician</option>
                <option value="plumber">Plumber</option>
                <option value="carpenter">Carpenter</option>
                <option value="mason">Mason</option>
                <option value="painter">Painter</option>
                <option value="driver">Driver</option>
                <option value="welder">Welder</option>
                <option value="loading_unloading">Loading & Unloading</option>
                <option value="cleaning_housekeeping">Cleaning & Housekeeping</option>
                <option value="ac_technician">AC Technician</option>
                <option value="security_guard">Security Guard</option>
                <option value="gardener">Gardener</option>
                <option value="cook">Cook</option>
                <option value="cctv_technician">CCTV Technician</option>
                <option value="solar_panel_technician">Solar Panel Technician</option>
                <option value="construction_helper">Construction Helper</option>
                <option value="babysitter">Babysitter</option>
                <option value="elder_care_assistant">Elder Care Assistant</option>
                <option value="agricultural_worker">Agricultural Worker</option>
                <option value="pest_control_worker">Pest Control Worker</option>
              </select>
            </div>

            <div className="form-grid-2" style={{ gap: 'var(--s-6)' }}>
                <div className="form-group">
                    <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 800, color: 'var(--primary)' }}>Full Name</label>
                    <input type="text" name="customer_name" value={form.customer_name} onChange={onChange} placeholder="Client Name" required style={{ padding: '0.875rem 1.25rem', borderRadius: 'var(--s-3)', background: '#fafafa', border: '1px solid var(--border)' }} />
                </div>
                <div className="form-group">
                    <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 800, color: 'var(--primary)' }}>Phone Number</label>
                    <input type="text" name="customer_phone" value={form.customer_phone} onChange={onChange} placeholder="10 Digits" required maxLength={10} style={{ padding: '0.875rem 1.25rem', borderRadius: 'var(--s-3)', background: '#fafafa', border: '1px solid var(--border)' }} />
                </div>
            </div>

            <div className="form-group">
              <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 800, color: 'var(--primary)' }}>Verification Email</label>
              <input type="email" name="customer_email" value={form.customer_email} onChange={onChange} placeholder="client@example.com" required style={{ padding: '0.875rem 1.25rem', borderRadius: 'var(--s-3)', background: '#fafafa', border: '1px solid var(--border)' }} />
            </div>

            <div className="form-group">
              <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 800, color: 'var(--primary)' }}>Work Site Address</label>
              <textarea name="customer_address" value={form.customer_address} onChange={onChange} placeholder="Precise service location..." required style={{ minHeight: '100px', padding: '0.875rem 1.25rem', borderRadius: 'var(--s-3)', background: '#fafafa', border: '1px solid var(--border)', resize: 'none' }} />
            </div>

            <div className="form-group">
              <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 800, color: 'var(--primary)' }}>Project Scope / Requirements</label>
              <textarea name="problem_description" value={form.problem_description} onChange={onChange} placeholder="Describe the requirements to help us match the right unit..." required style={{ minHeight: '140px', padding: '0.875rem 1.25rem', borderRadius: 'var(--s-3)', background: '#fafafa', border: '1px solid var(--border)', resize: 'none' }} />
            </div>

            <button type="submit" disabled={loading} style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '1.25rem', width: '100%', fontSize: '1.1rem', borderRadius: 'var(--s-4)', marginTop: 'var(--s-4)', boxShadow: 'var(--shadow-premium)' }}>
              {loading ? <div className="spinner"></div> : "Request OTP & Confirm Deployment"}
            </button>
            
            {error && <p className="error-msg text-center mt-6" style={{ color: 'var(--error)', fontWeight: 600 }}>{error}</p>}
          </form>
        </div>
      </main>

      <footer className="footer" style={{ border: 'none', background: 'transparent', textAlign: 'center', padding: 'var(--s-12) 0' }}>
        <p style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--primary)', opacity: 0.4 }}>&copy; 2026 Labour Management Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
}