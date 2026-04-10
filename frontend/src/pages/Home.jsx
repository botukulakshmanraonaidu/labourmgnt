import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="app-container mesh-bg" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Atmospheric Aura Engine */}
      <div className="aura-orb" style={{ top: '10%', left: '5%', width: '400px', height: '400px', background: 'var(--accent)', opacity: 0.08 }}></div>
      <div className="aura-orb" style={{ bottom: '10%', right: '10%', width: '500px', height: '500px', background: 'var(--success)', opacity: 0.05, animationDelay: '-5s' }}></div>
      <div className="aura-orb" style={{ top: '40%', left: '40%', width: '300px', height: '3000px', background: 'var(--accent)', opacity: 0.03, animationDelay: '-10s' }}></div>

      <nav className="navbar" style={{ border: 'none', background: 'transparent', padding: 'var(--s-6) 5%' }}>
        <h2 className="title-font" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: 'var(--tracking-tight)', color: 'var(--primary)' }}>
          LabourMgnt <span style={{ color: 'var(--accent)', fontWeight: 400 }}>Hub</span>
        </h2>
        <div className="nav-links" style={{ gap: 'var(--s-8)' }}>
          <Link to="/" style={{ color: 'var(--primary)', fontSize: '0.850rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Home</Link>
          <Link to="/portal" className="btn btn-premium" style={{ color: 'white', fontWeight: 700, padding: '0.5rem 1.5rem', borderRadius: '2rem', fontSize: '0.8rem', width: 'auto' }}>PORTAL GATEWAY</Link>
          <Link to="/services" style={{ color: 'var(--primary)', fontSize: '0.850rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Expertise Hub</Link>
        </div>
      </nav>

      <main className="content-wrapper">
        <section className="hero text-center animate-fade-in" style={{ minHeight: '55vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div className="max-width-container hero-content" style={{ zIndex: 2 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--s-2)', padding: '0.5rem 1.25rem', borderRadius: '2rem', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.1)', marginBottom: 'var(--s-6)', backdropFilter: 'blur(8px)' }}>
                <span className="status-pill" style={{ background: 'var(--accent)', color: 'white', padding: '0.2rem 0.6rem', fontSize: '0.6rem' }}>v2.0</span>
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Elite Platform Active</span>
            </div>

            <h1 className="title-font" style={{ fontSize: 'clamp(3rem, 10vw, 5.5rem)', color: 'var(--primary)', lineHeight: 0.85, marginBottom: 'var(--s-6)', letterSpacing: 'var(--tracking-tight)' }}>
              Precision Scaling <br />
              <span className="gradient-text">for Operations</span>
            </h1>
            <p style={{ maxWidth: '480px', margin: '0 auto var(--s-10)', fontSize: '1.2rem', lineHeight: 1.5, color: 'var(--text-muted)' }}>
              A high-visibility architecture for tracking attendance, managing assignments, and accelerating payments in a secure ecosystem.
            </p>
            <div className="hero-buttons" style={{ gap: 'var(--s-6)' }}>
              <Link to="/portal" className="btn btn-premium" style={{ padding: '1.125rem 3.5rem', fontSize: '1rem' }}>Initiate Platform Protocol</Link>
              <a href="#features" className="btn btn-outline" style={{ padding: '1.125rem 3rem', fontSize: '1rem', background: 'white' }}>Project Blueprint</a>
            </div>
          </div>
        </section>

        <section className="section-padding animate-fade-in" style={{ paddingTop: '0' }}>
          <div className="grid-container max-width-container" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--s-8)' }}>
            <div className="card text-center glass-panel card-magnetic">
              <h2 className="title-font" style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '8px' }}>120+</h2>
              <p style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Verified Specialists</p>
            </div>
            <div className="card text-center glass-panel card-magnetic">
              <h2 className="title-font" style={{ fontSize: '3rem', color: 'var(--success)', marginBottom: '8px' }}>Real-Time</h2>
              <p style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Status Telemetry</p>
            </div>
            <div className="card text-center glass-panel card-magnetic">
              <h2 className="title-font" style={{ fontSize: '3rem', color: 'var(--primary)', marginBottom: '8px' }}>Secure</h2>
              <p style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Encrypted Ledger</p>
            </div>
          </div>
        </section>

        <section id="features" className="section-padding animate-fade-in" style={{ padding: 'var(--s-24) 0', position: 'relative' }}>
          <div className="max-width-container">
            <div className="text-center mb-16">
                <span className="status-pill mb-4" style={{ background: 'var(--accent-soft)', color: 'var(--accent)' }}>System Scope</span>
                <h2 className="title-font" style={{ fontSize: '3rem', color: 'var(--primary)' }}>Architectural Advantages</h2>
            </div>
            <div className="grid-container" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--s-10)' }}>
              <div className="card glass-panel card-magnetic" style={{ padding: 'var(--s-12)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '1.25rem', background: 'var(--accent-soft)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--s-8)', fontSize: '1.5rem', boxShadow: '0 8px 15px rgba(59, 130, 246, 0.1)' }}>⚡</div>
                <h3 className="mb-4 title-font" style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>Automated Onboarding</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>Streamlined professional verification for specialists and enterprise-grade tools for project managers.</p>
              </div>
              <div className="card glass-panel card-magnetic" style={{ padding: 'var(--s-12)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '1.25rem', background: 'var(--success-soft)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--s-8)', fontSize: '1.5rem', boxShadow: '0 8px 15px rgba(139, 92, 246, 0.1)' }}>📊</div>
                <h3 className="mb-4 title-font" style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>Live Orchestration</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>Real-time coordination of work assignments and performance analytics through a high-clarity interface.</p>
              </div>
              <div className="card glass-panel card-magnetic" style={{ padding: 'var(--s-12)' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '1.25rem', background: 'rgba(15, 23, 42, 0.05)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--s-8)', fontSize: '1.5rem', boxShadow: '0 8px 15px rgba(15, 23, 42, 0.05)' }}>💎</div>
                <h3 className="mb-4 title-font" style={{ fontSize: '1.75rem', color: 'var(--primary)' }}>Payment Parity</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6 }}>Ultra-transparent financial settlement engine designed for security, accuracy, and professional trust.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" style={{ border: 'none', padding: 'var(--s-16) 5%', background: 'white', textAlign: 'center' }}>
        <p style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--primary)', opacity: 0.5 }}>&copy; 2026 Labour Management Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
