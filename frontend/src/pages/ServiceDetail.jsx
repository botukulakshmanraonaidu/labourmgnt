import { useParams, Link } from "react-router-dom";
import servicesData from "../data/services.json";
import servicesList from "../data/services-list.json";
import { staticPath } from "../utils/staticPath.js";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="app-container mesh-bg">
        <div className="content-wrapper flex-center section-padding" style={{ padding: 'var(--s-16) 0' }}>
          <div className="form-card text-center glass-panel" style={{ maxWidth: '440px', margin: '0 auto' }}>
            <h1 className="title-font gradient-text" style={{ fontSize: '2.5rem' }}>Service not found</h1>
            <p className="form-subtitle">The specialized service you are looking for is currently unavailable.</p>
            <Link to="/services" className="btn mt-4" style={{ width: '100%', backgroundColor: 'var(--primary)', color: 'white' }}>Return to Expertise</Link>
          </div>
        </div>
      </div>
    );
  }

  const listMatch = servicesList.find((s) =>
    service.title.toLowerCase().includes(s.name.toLowerCase())
  );

  const heroImage = listMatch ? staticPath(listMatch.img) : "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop";
  const title = service.title || listMatch?.name || "Service";
  const baseName = title.replace(/\s*Services?$/i, "").trim();

  return (
    <div className="app-container mesh-bg">
      {/* Navbar Aligned to Reference Standard */}
      <nav className="navbar" style={{ border: 'none', background: 'transparent', padding: 'var(--s-6) 5%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-4)' }}>
            <Link to="/services" className="nav-back-btn">
                <span>←</span> Expertise
            </Link>
            <h2 className="title-font" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: 'var(--tracking-tight)' }}>
                LabourMgnt <span style={{ color: 'var(--accent)', fontWeight: 400 }}>Hub</span>
            </h2>
        </div>
        <div className="nav-links" style={{ gap: 'var(--s-8)' }}>
          <Link to="/" style={{ color: 'var(--primary)', fontSize: '0.850rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Home</Link>
          <Link to="/portal" className="btn" style={{ color: 'var(--accent)', fontWeight: 700, background: 'var(--accent-soft)', padding: '0.5rem 1.25rem', borderRadius: '2rem', fontSize: '0.8rem', width: 'auto' }}>Portal Gateway</Link>
        </div>
      </nav>      <main className="content-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Talent Hub Aura */}
        <div className="aura-orb" style={{ top: '10%', right: '15%', width: '400px', height: '400px', background: 'var(--accent)', opacity: 0.08 }}></div>

        <section className="hero animate-fade-in" style={{ 
          position: 'relative', 
          color: 'white', 
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '35vh',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '0 0 3rem 3rem',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <div className="max-width-container hero-content" style={{ zIndex: 2 }}>
            <span className="status-pill mb-4" style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.65rem' }}>SPECIALIZED UNIT</span>
            <h1 className="title-font" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 0.95, letterSpacing: 'var(--tracking-tight)' }}>{title}</h1>
          </div>
        </section>

        {/* Scope Section - High Fidelity */}
        <section className="section-padding max-width-container animate-fade-in" style={{ padding: 'var(--s-12) 0' }}>
          <h2 className="title-font mb-8" style={{ fontSize: '2rem', color: 'var(--primary)' }}>Strategic Scope</h2>
          <div className="grid-container" style={{ gap: 'var(--s-4)', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            {service.items.map((item, idx) => (
              <div className="card glass-panel card-magnetic" key={idx} style={{ padding: 'var(--s-5)', display: 'flex', alignItems: 'center', gap: 'var(--s-4)', borderLeft: '4px solid var(--accent)', background: 'white' }}>
                <span style={{ color: 'var(--accent)', fontSize: '1.1rem', fontWeight: 800 }}>✓</span>
                <span style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--primary)' }}>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Professionals Grid - Elite Standards */}
        <section className="section-padding max-width-container animate-fade-in" style={{ background: 'rgba(15, 23, 42, 0.02)', borderRadius: '3rem', border: '1px solid var(--border)', marginTop: 'var(--s-6)', padding: 'var(--s-16)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--s-12)' }}>
            <div>
                <h2 className="title-font" style={{ fontSize: '2.5rem', color: 'var(--primary)', marginBottom: '4px' }}>Verified Talent</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Deployment-ready especialista with verified certification.</p>
            </div>
            <span className="status-pill" style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)', fontWeight: 800, padding: '0.5rem 1rem' }}>ACTIVE NETWORK</span>
          </div>
          <div className="grid-container" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--s-10)' }}>
            {service.workers.map((worker, idx) => (
              <div className={`card delay-${(idx % 5) + 1} glass-panel card-magnetic`} key={`${worker.name}-${idx}`} style={{ border: '1px solid var(--border)', padding: 'var(--s-8)', borderRadius: '2rem', background: 'white' }}>
                <div className="card-img-wrapper" style={{ height: '240px', borderRadius: '1.25rem', overflow: 'hidden', marginBottom: 'var(--s-8)', boxShadow: 'var(--shadow-sm)' }}>
                  <img src={staticPath(worker.img)} alt={worker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(worker.name)}&background=random&size=256`; }} />
                </div>
                <h3 className="title-font" style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '8px', color: 'var(--primary)' }}>{worker.name}</h3>
                <p className="text-muted flex-grow-1" style={{ fontSize: '1rem', marginBottom: 'var(--s-8)', lineHeight: 1.6 }}>{worker.experience}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="status-pill" style={{ backgroundColor: 'var(--success-soft)', color: 'var(--success)', fontWeight: 800, padding: '0.4rem 0.8rem' }}>{worker.status}</span>
                  <Link to="/booking" className="btn btn-premium" style={{ padding: '0.75rem 1.75rem', fontSize: '0.85rem', borderRadius: 'var(--s-4)' }}>Reserve Unit</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding" style={{ padding: 'var(--s-24) 0' }}>
            <div className="card section-padding text-center glass-panel aura-employer card-magnetic" style={{ maxWidth: '840px', margin: '0 auto', border: '1px solid var(--border)', padding: 'var(--s-16)', background: 'white', boxShadow: 'var(--shadow-premium)', borderRadius: '3rem' }}>
                <h2 className="title-font" style={{ fontSize: '3rem', marginBottom: 'var(--s-4)', color: 'var(--primary)' }}>Initiate <span className="gradient-text">{baseName} Deployment?</span></h2>
                <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: 'var(--s-12)' }}>Join world-class project orchestration through our verified specialist hub.</p>
                <Link to="/booking" className="btn btn-premium" style={{ padding: '1.25rem 4.5rem', margin: '0 auto', fontSize: '1.1rem' }}>Initiatize Booking Hub &rarr;</Link>
            </div>
        </section>
      </main>

      <footer className="footer" style={{ border: 'none', padding: 'var(--s-12) 5%', background: 'transparent', textAlign: 'center' }}>
        <p style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--primary)', opacity: 0.4 }}>&copy; 2026 Labour Management Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
