import { useLocation, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function BookingSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const booking = location.state?.booking;

  useEffect(() => {
    if (!booking) {
      navigate("/");
    }
  }, [booking, navigate]);

  if (!booking) return null;

  return (
    <div className="app-container mesh-bg">
      <nav className="navbar" style={{ border: 'none', background: 'transparent' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-4)' }}>
            <Link to="/" className="nav-back-btn" style={{ background: 'rgba(15, 23, 42, 0.05)' }}>
                <span>←</span> Home
            </Link>
            <h2 className="title-font" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)' }}>
                LabourMgnt <span style={{ color: 'var(--accent)', fontWeight: 400 }}>Hub</span>
            </h2>
        </div>
      </nav>

      <main className="content-wrapper animate-fade-in" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--s-16) 5%' }}>
        <div className="card glass-panel aura-worker" style={{ maxWidth: '640px', margin: 0, padding: 'var(--s-12)', textAlign: 'center', border: '1px solid var(--border)' }}>
          <div style={{ 
            width: '84px', 
            height: '84px', 
            borderRadius: '50%', 
            backgroundColor: 'var(--success-soft)', 
            color: 'var(--success)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            fontSize: '2.5rem',
            margin: '0 auto var(--s-8)',
            border: '2px solid currentColor'
          }}>
            ✓
          </div>
          
          <h1 className="title-font gradient-text-alt" style={{ fontSize: '3rem', marginBottom: 'var(--s-2)', lineHeight: 1 }}>Booking Confirmed!</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: 'var(--s-10)' }}>
            Thank you, <strong style={{ color: 'var(--primary)' }}>{booking.customer_name}</strong>. Your request for an elite professional service has been successfully registered in our secure ledger.
          </p>
          
          <div className="glass-panel" style={{ margin: '0 0 var(--s-10) 0', background: 'white', padding: 'var(--s-8)', textAlign: 'left', borderRadius: 'var(--s-4)', border: '1px solid var(--border)' }}>
            <h3 className="title-font mb-4" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', borderBottom: '1px solid var(--border)', paddingBottom: 'var(--s-2)', opacity: 0.6 }}>Deployment Summary</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-3)' }}>
              <p style={{ fontSize: '1rem' }}><strong>Specialization:</strong> {booking.service_type.replace(/_/g, ' ').toUpperCase()}</p>
              <p style={{ fontSize: '1rem' }}><strong>Authorized Lead:</strong> {booking.customer_name}</p>
              <p style={{ fontSize: '1rem' }}><strong>Verification Hub:</strong> {booking.customer_email}</p>
            </div>
          </div>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: 'var(--s-10)', fontStyle: 'italic', maxWidth: '500px', margin: '0 auto var(--s-10)' }}>
            A verified specialist will contact you shortly at your registered terminal to finalize project orchestration.
          </p>

          <div className="hero-buttons" style={{ display: 'flex', gap: 'var(--s-4)', justifyContent: 'center' }}>
            <Link to="/" className="btn" style={{ flex: 1, padding: '1.125rem', backgroundColor: 'var(--primary)', color: 'white' }}>Return Home</Link>
            <Link to="/services" className="btn btn-outline" style={{ flex: 1, padding: '1.125rem' }}>Reserve Another</Link>
          </div>
        </div>
      </main>

      <footer className="footer" style={{ border: 'none', background: 'transparent' }}>
        <p style={{ fontWeight: 700, fontSize: '0.85rem', opacity: 0.7, color: 'var(--primary)' }}>&copy; 2026 Labour Management Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
