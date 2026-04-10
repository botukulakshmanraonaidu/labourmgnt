import servicesList from "../data/services-list.json";
import { staticPath } from "../utils/staticPath.js";
import { Link } from "react-router-dom";

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function Services() {
  return (
    <div className="app-container mesh-bg">
      {/* Navbar Aligned to Reference Standard */}
      <nav className="navbar" style={{ border: 'none', background: 'transparent', padding: 'var(--s-6) 5%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-4)' }}>
          <Link to="/" className="nav-back-btn">
            <span>←</span> Home
          </Link>
          <h2 className="title-font" style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: 'var(--tracking-tight)' }}>
            LabourMgnt <span style={{ color: 'var(--accent)', fontWeight: 400 }}>Hub</span>
          </h2>
        </div>
        <div className="nav-links" style={{ gap: 'var(--s-8)' }}>
          <Link to="/portal" style={{ color: 'var(--primary)', fontSize: '0.850rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Portal Gateway</Link>
          <Link to="/services" className="btn" style={{ color: 'var(--accent)', fontWeight: 700, background: 'var(--accent-soft)', padding: '0.5rem 1.25rem', borderRadius: '2rem', fontSize: '0.8rem', width: 'auto' }}>EXPERTISE HUB</Link>
        </div>
      </nav>

      <main className="content-wrapper">
        <section className="hero text-center animate-fade-in" style={{ minHeight: '35vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          {/* Atmospheric Aura */}
          <div className="aura-orb" style={{ top: '0', left: '20%', width: '300px', height: '300px', background: 'var(--accent)', opacity: 0.1 }}></div>

          <div className="max-width-container hero-content" style={{ zIndex: 2 }}>
            <span className="status-pill mb-4" style={{ backgroundColor: 'var(--accent-soft)', color: 'var(--accent)', fontWeight: 700, fontSize: '0.65rem' }}>PRO-VERIFIED UNITS</span>
            <h1 className="title-font gradient-text" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1, letterSpacing: 'var(--tracking-tight)' }}>Specialized <br />Expertise Hub</h1>
            <p style={{ maxWidth: '500px', margin: 'var(--s-6) auto 0', fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>Select a specialized unit to orchestrate your project through a verified network of elite specialists.</p>
          </div>
        </section>

        <div className="section-padding max-width-container" style={{ paddingTop: '0' }}>
          {/* Elite Magnetic Grid */}
          <div className="grid-container" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--s-8)' }}>
            {servicesList.map((service, idx) => {
              const slug = slugify(service.name);
              return (
                <div className={`card animate-fade-in delay-${(idx % 5) + 1} glass-panel card-magnetic`} key={service.name} style={{ border: '1px solid var(--border)', padding: 'var(--s-8)', borderRadius: '2rem' }}>
                  <div className="card-img-wrapper" style={{ height: '200px', borderRadius: '1.25rem', overflow: 'hidden', marginBottom: 'var(--s-6)', boxShadow: 'var(--shadow-sm)' }}>
                    <img
                      src={staticPath(service.img)}
                      alt={service.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"; }}
                    />
                  </div>
                  <h3 className="mb-2 title-font" style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--primary)' }}>{service.name}</h3>
                  <p className="text-muted flex-grow-1" style={{ fontSize: '0.95rem', lineHeight: 1.6, marginBottom: 'var(--s-8)' }}>
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${slug}`}
                    className="btn btn-premium"
                    style={{ width: '100%', fontWeight: 700, padding: '1rem', fontSize: '0.9rem', borderRadius: 'var(--s-4)' }}
                  >
                    Deploy Specialist Unit
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="footer" style={{ border: 'none', background: 'transparent', textAlign: 'center', padding: 'var(--s-16) 0' }}>
        <p style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--primary)', opacity: 0.4 }}>&copy; 2026 Labour Management Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
}