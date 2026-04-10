import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { postJson } from "../utils/api.js";

export default function WorkerLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
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
      await postJson("/workers/login/", form);
      navigate("/services");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container split-screen mesh-bg">
      {/* Branded Side Panel - Professional Rhythm */}
      <div className="split-side-brand glass-panel aura-worker" style={{ background: 'transparent', border: 'none', padding: 'var(--s-16) 10%' }}>
        <div className="animate-fade-in" style={{ position: 'relative', zIndex: 10 }}>
          <Link to="/portal" className="nav-back-btn mb-12" style={{ display: 'inline-flex', background: 'var(--success-soft)', color: 'var(--success)', borderRadius: 'var(--s-3)' }}>
            <span>←</span> Back to Hub Gateway
          </Link>
          <span className="status-pill mb-4" style={{ backgroundColor: 'white', color: 'var(--success)', border: '1px solid var(--success-soft)' }}>SPECIALIST NETWORK</span>
          <h1 className="title-font" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'var(--primary)', marginBottom: 'var(--s-6)', lineHeight: 0.9 }}>Specialist <br /><span className="gradient-text">Portal.</span></h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6', maxWidth: '380px' }}>
            Access world-class project assignments. Link your credentials to the elite deployment hub.
          </p>
        </div>
      </div>

      {/* Clean Form Side - Professional Alignment */}
      <div className="split-side-form" style={{ background: 'white', padding: 'var(--s-16) 8%' }}>
        <div className="auth-form-container animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="title-font" style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary)' }}>Specialist Login</h2>
            <p className="text-muted" style={{ fontSize: '0.95rem' }}>Synchronize with your professional dashboard.</p>
          </div>
          
          <form onSubmit={onSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div className="form-group mb-6">
              <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Specialist ID (Username)</label>
              <input type="text" name="username" value={form.username} onChange={onChange} placeholder="expert_johndoe" required style={{ padding: '0.875rem 1.25rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)' }} />
            </div>

            <div className="form-group mb-12">
              <label style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Private Key (Password)</label>
              <input type="password" name="password" value={form.password} onChange={onChange} placeholder="••••••••" required style={{ padding: '0.875rem 1.25rem', borderRadius: 'var(--s-3)', boxShadow: 'var(--shadow-sm)' }} />
            </div>

            <button type="submit" disabled={loading} style={{ backgroundColor: 'var(--success)', color: 'white', padding: '1rem', fontSize: '1rem', width: '100%', borderRadius: 'var(--s-4)', boxShadow: 'var(--shadow-premium)' }}>
              {loading ? <div className="spinner"></div> : "Authorize Specialist Sync"}
            </button>
            
            {error && <p className="error-msg text-center mt-6" style={{ color: 'var(--error)', fontWeight: 600 }}>{error}</p>}
            
            <p className="text-center mt-10" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              Join the Network? <Link to="/workers/register" style={{ color: 'var(--success)', fontWeight: 800, textDecoration: 'underline' }}>Onboard as Specialist</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}