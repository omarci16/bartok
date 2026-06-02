/* Shared UI: nav, footer, icons, sticky cta */
/* global React */
const { useState, useEffect, useRef } = React;

// ============= ICONS =============
const Icon = {
  Paw: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="6" cy="9" rx="1.6" ry="2.2"/>
      <ellipse cx="10" cy="6" rx="1.6" ry="2.2"/>
      <ellipse cx="14" cy="6" rx="1.6" ry="2.2"/>
      <ellipse cx="18" cy="9" rx="1.6" ry="2.2"/>
      <path d="M8 15c0-2.5 1.8-4 4-4s4 1.5 4 4c0 2-1.4 3.5-4 3.5S8 17 8 15z"/>
    </svg>
  ),
  Phone: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Calendar: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2"/>
      <path d="M16 2v4M8 2v4M3 10h18"/>
    </svg>
  ),
  Pin: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Clock: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  ),
  Mail: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-10 6L2 7"/>
    </svg>
  ),
  Heart: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  Stetho: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 3v6a5 5 0 0 0 10 0V3"/>
      <path d="M9 14v3a5 5 0 0 0 10 0v-2"/>
      <circle cx="19" cy="11" r="2"/>
    </svg>
  ),
  Syringe: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 2 4 4M17 3l4 4M11.5 6.5 17 1l6 6-5.5 5.5M11.5 6.5l6 6M11.5 6.5 2 16v6h6L17.5 12.5"/>
    </svg>
  ),
  Scan: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/>
      <path d="M7 12h10"/>
    </svg>
  ),
  Scalpel: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21 21 3"/>
      <path d="M14 10 21 3 18 6 9 15"/>
      <path d="m9 15 3 3-3 3-3-3 3-3z"/>
    </svg>
  ),
  Tooth: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2c-3 0-5 1-7 1-1 3 1 8 2 12 .5 2 1 7 3 7s2-4 2-6c0-1 0-2 1-2s1 1 1 2c0 2 0 6 2 6s2.5-5 3-7c1-4 3-9 2-12-2 0-4-1-7-1z"/>
    </svg>
  ),
  Chip: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="12" height="12" rx="1.5"/>
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/>
      <rect x="10" y="10" width="4" height="4" rx="0.5"/>
    </svg>
  ),
  Siren: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a6 6 0 0 0-6 6v3H4a2 2 0 0 0-2 2v3h20v-3a2 2 0 0 0-2-2h-2V8a6 6 0 0 0-6-6z"/>
      <path d="M2 19h20M12 2v3M19 5l-2 2M5 5l2 2"/>
    </svg>
  ),
  Plus: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14"/>
    </svg>
  ),
  Minus: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14"/>
    </svg>
  ),
  Arrow: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7"/>
    </svg>
  ),
  Star: ({ s = 14, filled = true }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  Check: ({ s = 18 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5"/>
    </svg>
  ),
  Menu: ({ s = 22 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M3 6h18M3 12h18M3 18h18"/>
    </svg>
  ),
  Close: ({ s = 22 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M18 6 6 18M6 6l12 12"/>
    </svg>
  ),
  Globe: ({ s = 16 }) => (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>
    </svg>
  ),
};

// ============= LOGO =============
function Logo({ inverse = false }) {
  const c = inverse ? '#F4EFE6' : '#16181C';
  const accent = '#5C7A66';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width="34" height="34" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="19" fill="none" stroke={c} strokeWidth="1.4"/>
        <path d="M14 22 Q20 12 26 22" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="20" cy="22" r="2.4" fill={accent}/>
        <circle cx="13" cy="17" r="1.6" fill={c}/>
        <circle cx="27" cy="17" r="1.6" fill={c}/>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontFamily: 'var(--display)', fontWeight: 600, fontSize: 16, letterSpacing: '-0.02em', color: c }}>Bartók</span>
        <span style={{ fontFamily: 'var(--body)', fontSize: 10, fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: inverse ? '#A8BFA9' : '#5C7A66', marginTop: 3 }}>Állatorvosi Rendelő</span>
      </div>
    </div>
  );
}

// ============= NAV =============
function Nav({ active = 'home', onNav, variant = 'light' }) {
  const items = [
    { id: 'home',     label: 'Kezdőlap' },
    { id: 'services', label: 'Szolgáltatások' },
    { id: 'doctors',  label: 'Állatorvosaink' },
    { id: 'emergency',label: 'Sürgősség' },
    { id: 'contact',  label: 'Kapcsolat' },
  ];
  const inv = variant === 'dark';
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: inv ? 'rgba(22,24,28,0.92)' : 'rgba(250,247,241,0.86)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: `1px solid ${inv ? 'rgba(255,255,255,0.06)' : 'var(--stone)'}`,
    }}>
      <div className="container-wide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
        <a href="#" onClick={(e)=>{e.preventDefault(); onNav && onNav('home');}}>
          <Logo inverse={inv} />
        </a>
        <nav style={{ display: 'flex', gap: 4 }}>
          {items.map(it => (
            <a key={it.id} href="#" onClick={(e)=>{e.preventDefault(); onNav && onNav(it.id);}}
              style={{
                fontSize: 14, fontWeight: 500,
                padding: '10px 14px',
                borderRadius: 999,
                color: active === it.id ? (inv ? '#F4EFE6' : 'var(--ink)') : (inv ? 'rgba(244,239,230,0.65)' : 'var(--ink-3)'),
                background: active === it.id ? (inv ? 'rgba(255,255,255,0.08)' : 'var(--paper-2)') : 'transparent',
                transition: 'all .15s ease',
              }}
            >{it.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: inv ? 'rgba(244,239,230,0.65)' : 'var(--ink-3)' }}>
            <Icon.Globe s={14}/> HU / EN
          </a>
          <a href="tel:+3652123456" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 13, fontWeight: 600,
            color: inv ? '#F4EFE6' : 'var(--ink)',
            padding: '10px 14px',
          }}>
            <Icon.Phone s={15}/> +36 52 123 456
          </a>
          <button className="btn btn-primary" style={{ padding: '13px 18px', fontSize: 14 }}
            onClick={()=> onNav && onNav('contact')}>
            Időpontfoglalás
          </button>
        </div>
      </div>
    </header>
  );
}

// ============= MOBILE NAV =============
function MobileNav({ active, onNav, open, setOpen }) {
  const items = [
    { id: 'home',     label: 'Kezdőlap' },
    { id: 'services', label: 'Szolgáltatások' },
    { id: 'doctors',  label: 'Állatorvosaink' },
    { id: 'emergency',label: 'Sürgősség' },
    { id: 'contact',  label: 'Kapcsolat' },
  ];
  return (
    <>
      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(250,247,241,0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--stone)',
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px',
      }}>
        <a href="#" onClick={(e)=>{e.preventDefault(); onNav('home');}}>
          <Logo />
        </a>
        <button onClick={()=>setOpen(!open)} style={{ width: 42, height: 42, borderRadius: 999, background: 'var(--paper-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {open ? <Icon.Close /> : <Icon.Menu />}
        </button>
      </header>
      {open && (
        <div style={{
          position: 'fixed', inset: '64px 0 0 0', zIndex: 49,
          background: 'var(--paper)',
          padding: 24,
          display: 'flex', flexDirection: 'column',
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {items.map(it => (
              <a key={it.id} href="#" onClick={(e)=>{e.preventDefault(); onNav(it.id); setOpen(false);}}
                style={{
                  fontFamily: 'var(--display)', fontSize: 28, letterSpacing: '-0.02em', fontWeight: 500,
                  padding: '14px 0',
                  borderBottom: '1px solid var(--stone)',
                  color: active === it.id ? 'var(--moss)' : 'var(--ink)',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                }}
              >
                {it.label}
                {active === it.id && <Icon.Arrow s={18}/>}
              </a>
            ))}
          </nav>
          <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <button className="btn btn-primary" style={{ width: '100%', padding: '18px' }} onClick={()=>{onNav('contact'); setOpen(false);}}>
              <Icon.Calendar s={16}/> Időpontfoglalás
            </button>
            <a href="tel:+3652123456" className="btn btn-secondary" style={{ width: '100%', padding: '18px' }}>
              <Icon.Phone s={16}/> +36 52 123 456
            </a>
          </div>
        </div>
      )}
    </>
  );
}

// ============= FOOTER =============
function Footer({ onNav }) {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--bone)', paddingTop: 80, paddingBottom: 40, marginTop: 80 }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 60, paddingBottom: 60, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          <div>
            <Logo inverse />
            <p style={{ marginTop: 24, fontSize: 14, lineHeight: 1.6, color: 'rgba(244,239,230,0.65)', maxWidth: 320 }}>
              Modern, barátságos környezetben várjuk kisállat pácienseinket Debrecen legújabb állatorvosi rendelőjében.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 8 }}>
              <span className="chip chip-ink" style={{ background: 'rgba(168,191,169,0.15)', color: '#A8BFA9' }}>
                <Icon.Heart s={12}/> 1200+ páciens
              </span>
            </div>
          </div>
          <FooterCol title="Klinika" items={[
            { l: 'Kezdőlap', id: 'home' },
            { l: 'Szolgáltatások', id: 'services' },
            { l: 'Állatorvosaink', id: 'doctors' },
            { l: 'Sürgősség', id: 'emergency' },
            { l: 'Kapcsolat', id: 'contact' },
          ]} onNav={onNav}/>
          <FooterCol title="Szolgáltatások" items={[
            { l: 'Általános vizsgálat' },
            { l: 'Védőoltások' },
            { l: 'Diagnosztika' },
            { l: 'Sebészet' },
            { l: 'Fogászat' },
            { l: 'Mikrochip' },
          ]}/>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A8BFA9', marginBottom: 18 }}>Elérhetőség</div>
            <div style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(244,239,230,0.85)' }}>
              Bartók Béla út 47.<br/>
              4032 Debrecen, Magyarország
            </div>
            <div style={{ marginTop: 18, fontSize: 14, lineHeight: 1.8, color: 'rgba(244,239,230,0.85)' }}>
              <div>+36 52 123 456</div>
              <div>hello@bartokvet.hu</div>
            </div>
            <div style={{ marginTop: 18, fontSize: 13, lineHeight: 1.7, color: 'rgba(244,239,230,0.55)' }}>
              <div>H–P · 08:00–19:00</div>
              <div>Szo · 09:00–14:00</div>
              <div>V · zárva</div>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: 'rgba(244,239,230,0.45)' }}>
          <div>© 2026 Bartók Állatorvosi Rendelő · Adószám: 12345678-1-09</div>
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#">Adatvédelem</a>
            <a href="#">ÁSZF</a>
            <a href="#">Süti beállítások</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items, onNav }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A8BFA9', marginBottom: 18 }}>{title}</div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
        {items.map((it, i) => (
          <li key={i}>
            <a href="#" onClick={(e)=>{ e.preventDefault(); if(it.id && onNav) onNav(it.id); }}
              style={{ fontSize: 14, color: 'rgba(244,239,230,0.75)' }}>{it.l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============= STICKY BOOK CTA (DESKTOP) =============
function StickyBookCTA({ onNav }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{
      position: 'fixed', right: 28, bottom: 28, zIndex: 40,
      transform: show ? 'translateY(0)' : 'translateY(120%)',
      opacity: show ? 1 : 0,
      transition: 'transform .35s ease, opacity .35s ease',
    }}>
      <button onClick={()=> onNav && onNav('contact')}
        className="btn btn-primary"
        style={{ padding: '18px 24px', fontSize: 15, boxShadow: '0 18px 40px -12px rgba(22,24,28,0.35), 0 4px 10px rgba(22,24,28,0.12)' }}>
        <Icon.Calendar s={16}/> Időpontfoglalás
      </button>
    </div>
  );
}

// ============= MOBILE STICKY CTA =============
function MobileStickyCTA({ onNav }) {
  return (
    <div style={{
      position: 'sticky', bottom: 0, zIndex: 30,
      background: 'rgba(250,247,241,0.94)',
      backdropFilter: 'blur(12px)',
      borderTop: '1px solid var(--stone)',
      padding: '12px 16px',
      display: 'flex', gap: 10,
    }}>
      <a href="tel:+3652123456" className="btn btn-secondary" style={{ flex: '0 0 auto', width: 52, height: 52, padding: 0, borderRadius: 999 }}>
        <Icon.Phone s={18}/>
      </a>
      <button className="btn btn-primary" style={{ flex: 1, height: 52 }} onClick={()=> onNav && onNav('contact')}>
        <Icon.Calendar s={16}/> Foglaljon időpontot
      </button>
    </div>
  );
}

Object.assign(window, {
  Icon, Logo, Nav, MobileNav, Footer, StickyBookCTA, MobileStickyCTA,
});
