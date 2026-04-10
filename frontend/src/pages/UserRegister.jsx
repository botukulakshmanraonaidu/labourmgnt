import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { postJson } from "../utils/api.js";

export default function UserRegister() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    full_name: "",
    username: "",
    password: "",
    phone: "",
    Email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    user_type: "employer"
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
      await postJson("/users/register/", form);
      navigate("/users/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container split-screen mesh-bg">
      {/* Branded Side Panel - Reference Rhythm */}
      <div className="split-side-brand glass-panel aura-employer" style={{ background: 'transparent', border: 'none', padding: 'var(--s-16) 10%' }}>
        <div className="animate-fade-in" style={{ position: 'relative', zIndex: 10 }}>
          <Link to="/portal" className="nav-back-btn mb-12" style={{ display: 'inline-flex', background: 'var(--accent-soft)', color: 'var(--accent)', borderRadius: 'var(--s-3)' }}>
            <span>←</span> Back to Hub Gateway
          </Link>
          <span className="status-pill mb-4" style={{ backgroundColor: 'white', color: 'var(--accent)', border: '1px solid var(--accent-soft)' }}>BUSINESS PORTAL</span>
          <h1 className="title-font" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--primary)', marginBottom: 'var(--s-6)', lineHeight: 0.9 }}>Employer <br /><span className="gradient-text">Registration.</span></h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '380px' }}>
            Build your project identity. Access elite specialist professionals and automate your enterprise-grade operations.
          </p>
        </div>
      </div>

      {/* Clean Form Side - High Density Alignment */}
      <div className="split-side-form" style={{ background: 'white', padding: 'var(--s-16) 8%' }}>
        <div className="auth-form-container animate-fade-in" style={{ maxWidth: '540px' }}>
          <div className="text-center mb-10">
            <h2 className="title-font" style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary)' }}>Create Hub Profile</h2>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>Initiate your project orchestration workspace.</p>
          </div>
          
          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-4)' }}>
            <div className="form-grid-2" style={{ gap: 'var(--s-4)' }}>
              <div className="form-group">
                <label style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>Full Name</label>
                <input type="text" name="full_name" value={form.full_name} onChange={onChange} placeholder="John Doe" required style={{ padding: '0.875rem 1.125rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)' }} />
              </div>
              <div className="form-group">
                <label style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>Hub Username</label>
                <input type="text" name="username" value={form.username} onChange={onChange} placeholder="johndoe_enterprise" required style={{ padding: '0.875rem 1.125rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)' }} />
              </div>
            </div>

            <div className="form-group">
              <label style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>Business Email Address</label>
              <input type="email" name="Email" value={form.Email} onChange={onChange} placeholder="john@example.com" required style={{ padding: '0.875rem 1.125rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)' }} />
            </div>

            <div className="form-grid-2" style={{ gap: 'var(--s-4)' }}>
              <div className="form-group">
                <label style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>Master Password</label>
                <input type="password" name="password" value={form.password} onChange={onChange} placeholder="••••••••" required style={{ padding: '0.875rem 1.125rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)' }} />
              </div>
              <div className="form-group">
                <label style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>Mobile Registry</label>
                <input type="text" name="phone" value={form.phone} onChange={onChange} placeholder="10-digit mobile" required maxLength={10} style={{ padding: '0.875rem 1.125rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)' }} />
              </div>
            </div>

            <div className="form-group">
              <label style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>Deployment Site Address</label>
              <input type="text" name="address" value={form.address} onChange={onChange} placeholder="123 Project Site St" required style={{ padding: '0.875rem 1.125rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)' }} />
            </div>

            <div className="form-grid-3" style={{ gap: 'var(--s-3)' }}>
              <div className="form-group">
                <label style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>City</label>
                <input type="text" name="city" value={form.city} onChange={onChange} placeholder="City" required style={{ padding: '0.875rem 1.125rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)' }} />
              </div>
              <div className="form-group">
                <label style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>State</label>
                <input type="text" name="state" value={form.state} onChange={onChange} placeholder="State" required style={{ padding: '0.875rem 1.125rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)' }} />
              </div>
              <div className="form-group">
                <label style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>ZIP</label>
                <input type="text" name="pincode" value={form.pincode} onChange={onChange} placeholder="ZIP" required style={{ padding: '0.875rem 1.125rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)' }} />
              </div>
            </div>

            <button type="submit" disabled={loading} style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '1rem', width: '100%', fontSize: '1rem', borderRadius: 'var(--s-4)', marginTop: 'var(--s-4)', boxShadow: 'var(--shadow-premium)' }}>
              {loading ? <div className="spinner"></div> : "Finalize Profile & Access Portal"}
            </button>
            
            {error && <p className="error-msg text-center mt-4" style={{ color: 'var(--error)', fontWeight: 600 }}>{error}</p>}
            
            <p className="text-center mt-8" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Managed Identity exists? <Link to="/users/login" style={{ color: 'var(--accent)', fontWeight: 800, textDecoration: 'underline' }}>Sign In to Workspace</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}