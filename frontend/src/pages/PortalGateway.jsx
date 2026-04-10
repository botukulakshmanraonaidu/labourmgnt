import { Link, useNavigate } from "react-router-dom";

export default function PortalGateway() {
    const navigate = useNavigate();

    return (
        <div className="app-container mesh-bg" style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
            {/* Atmospheric Aura Engine */}
            <div className="aura-orb" style={{ top: '5%', right: '10%', width: '400px', height: '400px', background: 'var(--accent)', opacity: 0.1 }}></div>
            <div className="aura-orb" style={{ bottom: '15%', left: '5%', width: '350px', height: '350px', background: 'var(--success)', opacity: 0.08, animationDelay: '-8s' }}></div>

            <nav className="navbar" style={{ border: 'none', background: 'transparent', padding: 'var(--s-6) 5%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-4)' }}>
                    <Link to="/" className="nav-back-btn">
                        <span>←</span> Home
                    </Link>
                    <h2 className="title-font" style={{ color: 'var(--primary)', letterSpacing: 'var(--tracking-tight)' }}>
                        LabourMgnt <span style={{ color: 'var(--accent)', fontWeight: 400 }}>Hub</span>
                    </h2>
                </div>
                <div className="nav-links" style={{ gap: 'var(--s-8)' }}>
                    <Link to="/portal" className="btn btn-premium" style={{ color: 'white', fontWeight: 700, padding: '0.5rem 1.5rem', borderRadius: '2rem', fontSize: '0.8rem', width: 'auto' }}>PORTAL GATEWAY</Link>
                    <Link to="/services" style={{ color: 'var(--primary)', fontSize: '0.850rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Expertise Hub</Link>
                </div>
            </nav>

            <main className="content-wrapper" style={{ padding: 'var(--s-4) 0 var(--s-16)', zIndex: 2 }}>
                <div className="text-center animate-fade-in" style={{ maxWidth: '640px', margin: '0 auto var(--s-12)' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--s-2)', padding: '0.4rem 1rem', borderRadius: '2rem', background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.1)', marginBottom: 'var(--s-6)', backdropFilter: 'blur(8px)' }}>
                        <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Access Protocol</span>
                    </div>
                    <h1 className="title-font" style={{ fontSize: 'clamp(3rem, 7vw, 4rem)', color: 'var(--primary)', lineHeight: 0.9, marginBottom: 'var(--s-4)', letterSpacing: 'var(--tracking-tight)' }}>Select Your <br /><span className="gradient-text">Gateway</span></h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', margin: '0 auto', maxWidth: '440px', lineHeight: 1.5 }}>
                        Identify your specialization to access the dedicated deployment and orchestration tools.
                    </p>
                </div>

                <div className="gateway-split" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 'var(--s-10)', maxWidth: '1000px', margin: '0 auto', width: '100%', padding: '0 var(--s-4)' }}>
                    <section
                        className="card glass-panel animate-fade-in aura-employer card-magnetic"
                        onClick={() => navigate("/users/register")}
                        style={{ padding: 'var(--s-12)', cursor: 'pointer', border: '1px solid var(--border)', borderRadius: '2rem', textAlign: 'center' }}
                    >
                        <div style={{ width: '64px', height: '64px', borderRadius: '1.5rem', background: 'var(--accent-soft)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: 'var(--s-8)', margin: '0 auto var(--s-8)', boxShadow: '0 8px 20px rgba(59, 130, 246, 0.15)' }}>💼</div>
                        <h2 className="title-font" style={{ fontSize: '2rem', marginBottom: 'var(--s-3)', color: 'var(--primary)' }}>Business</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--s-10)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '280px', margin: '0 auto var(--s-10)' }}>
                            Access elite verified specialists. Managed with high-resolution visibility.
                        </p>
                        <div className="hero-buttons" style={{ width: '100%', gap: 'var(--s-4)' }}>
                            <Link to="/users/login" className="btn btn-premium" style={{ width: '100%', padding: '1rem', fontSize: '0.95rem' }}>Business Sign In</Link>
                            <Link to="/users/register" className="btn btn-outline" style={{ width: '100%', padding: '1rem', fontSize: '0.95rem', background: 'white' }}>Establish Profile</Link>
                        </div>
                    </section>

                    <section
                        className="card glass-panel animate-fade-in delay-1 aura-worker card-magnetic"
                        onClick={() => navigate("/workers/register")}
                        style={{ padding: 'var(--s-12)', cursor: 'pointer', border: '1px solid var(--border)', borderRadius: '2rem', textAlign: 'center' }}
                    >
                        <div style={{ width: '64px', height: '64px', borderRadius: '1.5rem', background: 'var(--success-soft)', color: 'var(--success)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: 'var(--s-8)', margin: '0 auto var(--s-8)', boxShadow: '0 8px 20px rgba(139, 92, 246, 0.15)' }}>⚡</div>
                        <h2 className="title-font" style={{ fontSize: '2rem', marginBottom: 'var(--s-3)', color: 'var(--primary)' }}>Specialist</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--s-10)', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: '280px', margin: '0 auto var(--s-10)' }}>
                            Join the specialist network. Secure world-class project assignments.
                        </p>
                        <div className="hero-buttons" style={{ width: '100%', gap: 'var(--s-4)' }}>
                            <Link to="/workers/login" className="btn" style={{ width: '100%', padding: '1rem', fontSize: '0.95rem', backgroundColor: 'var(--success)', color: 'white', border: 'none' }}>Specialist Login</Link>
                            <Link to="/workers/register" className="btn btn-outline" style={{ width: '100%', padding: '1rem', fontSize: '0.95rem', background: 'white' }}>Register Skillset</Link>
                        </div>
                    </section>
                </div>
            </main>

            <footer className="footer" style={{ border: 'none', padding: 'var(--s-16) 5%', background: 'transparent', textAlign: 'center' }}>
                <p style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--primary)', opacity: 0.4 }}>&copy; 2026 Labour Management Hub. All Rights Reserved.</p>
            </footer>
        </div>
    );
}
