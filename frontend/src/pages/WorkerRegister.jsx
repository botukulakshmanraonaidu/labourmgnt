import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { postJson } from "../utils/api.js";

export default function WorkerRegister() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    name: "",
    phone: "",
    email: "",
    experience: "",
    status: "Available",
    img: "default.jpg"
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await postJson("/workers/register/", form);
      navigate("/workers/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container split-screen mesh-bg">
      {/* Branded Side Panel - Reference Rhythm */}
      <div className="split-side-brand glass-panel aura-worker" style={{ background: 'transparent', border: 'none', padding: 'var(--s-16) 10%' }}>
        <div className="animate-fade-in" style={{ position: 'relative', zIndex: 10 }}>
          <Link to="/portal" className="nav-back-btn mb-12" style={{ display: 'inline-flex', background: 'var(--success-soft)', color: 'var(--success)', borderRadius: 'var(--s-3)' }}>
            <span>←</span> Back to Hub Gateway
          </Link>
          <span className="status-pill mb-4" style={{ backgroundColor: 'white', color: 'var(--success)', border: '1px solid var(--success-soft)' }}>SPECIALIST NETWORK</span>
          <h1 className="title-font" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--primary)', marginBottom: 'var(--s-6)', lineHeight: 0.9 }}>Specialist <br /><span className="gradient-text">Onboarding.</span></h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '380px' }}>
            Join the elite specialist hub. Secure world-class project assignments and collaborate within a high-fidelity professional ecosystem.
          </p>
        </div>
      </div>

      {/* Clean Form Side - High Density Alignment */}
      <div className="split-side-form" style={{ background: 'white', padding: 'var(--s-16) 8%' }}>
        <div className="auth-form-container animate-fade-in" style={{ maxWidth: '540px' }}>
          <div className="text-center mb-10">
            <h2 className="title-font" style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary)' }}>Apply for Talent Hub</h2>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>Link your professional specialization to our verified network.</p>
          </div>
          
          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-4)' }}>
            <div className="form-grid-2" style={{ gap: 'var(--s-4)' }}>
              <div className="form-group">
                <label style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>Professional Name</label>
                <input type="text" name="name" value={form.name} onChange={onChange} placeholder="John Doe" required style={{ padding: '0.875rem 1.125rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)' }} />
              </div>
              <div className="form-group">
                <label style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>Specialist Username</label>
                <input type="text" name="username" value={form.username} onChange={onChange} placeholder="expert_johndoe" required style={{ padding: '0.875rem 1.125rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)' }} />
              </div>
            </div>

            <div className="form-grid-2" style={{ gap: 'var(--s-4)' }}>
              <div className="form-group">
                <label style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>Verified Email</label>
                <input type="email" name="email" value={form.email} onChange={onChange} placeholder="john@expert.com" required style={{ padding: '0.875rem 1.125rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)' }} />
              </div>
              <div className="form-group">
                <label style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>Mobile Telemetry</label>
                <input type="text" name="phone" value={form.phone} onChange={onChange} placeholder="10-digit mobile" required maxLength={10} style={{ padding: '0.875rem 1.125rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)' }} />
              </div>
            </div>

            <div className="form-group">
              <label style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>Specialization Summary</label>
              <textarea name="experience" value={form.experience} onChange={onChange} placeholder="e.g., 5+ years of specialized HVAC orchestration..." required style={{ padding: '0.875rem 1.125rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)', minHeight: '100px', resize: 'none' }} />
            </div>

            <div className="form-group">
              <label style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>Private Master Password</label>
              <input type="password" name="password" value={form.password} onChange={onChange} placeholder="••••••••" required style={{ padding: '0.875rem 1.125rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)' }} />
            </div>

            <button type="submit" disabled={loading} style={{ backgroundColor: 'var(--success)', color: 'white', padding: '1rem', width: '100%', fontSize: '1rem', borderRadius: 'var(--s-4)', marginTop: 'var(--s-4)', boxShadow: 'var(--shadow-premium)' }}>
              {loading ? <div className="spinner"></div> : "Finalize Specialist Onboarding"}
            </button>
            
            {error && <p className="error-msg text-center mt-4" style={{ color: 'var(--error)', fontWeight: 600 }}>{error}</p>}
            
            <p className="text-center mt-8" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Identification exists? <Link to="/workers/login" style={{ color: 'var(--success)', fontWeight: 800, textDecoration: 'underline' }}>Sign In to Portal</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}