import Link from 'next/link';
import Logo from './Logo';
import { HeartIcon } from './icons';

const pageLinks = [
  { href: '/',               label: 'Kezdőlap' },
  { href: '/szolgaltatasok', label: 'Szolgáltatások' },
  { href: '/allatorvosaink', label: 'Állatorvosaink' },
  { href: '/surgossegi',     label: 'Sürgősség' },
  { href: '/kapcsolat',      label: 'Kapcsolat' },
];

const serviceLinks = [
  'Általános vizsgálat',
  'Védőoltások',
  'Diagnosztika',
  'Sebészet',
  'Fogászat',
  'Mikrochip',
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--ink)', color: 'var(--bone)', paddingTop: 80, paddingBottom: 40, marginTop: 80 }}>
      <div className="container-wide">
        <div className="mob-footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: 60,
          paddingBottom: 60,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}>
          {/* Brand */}
          <div>
            <Logo inverse />
            <p style={{ marginTop: 24, fontSize: 14, lineHeight: 1.6, color: 'rgba(244,239,230,0.65)', maxWidth: 320 }}>
              Modern, barátságos környezetben várjuk kisállat pácienseinket Debrecen legújabb állatorvosi rendelőjében.
            </p>
            <div style={{ marginTop: 28, display: 'flex', gap: 8 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                fontSize: 12, fontWeight: 600, letterSpacing: '0.04em',
                padding: '7px 12px', borderRadius: 999,
                background: 'rgba(168,191,169,0.15)', color: '#A8BFA9',
              }}>
                <HeartIcon size={12} /> 1200+ páciens
              </span>
            </div>
          </div>

          {/* Pages */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A8BFA9', marginBottom: 18 }}>
              Klinika
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {pageLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={{ fontSize: 14, color: 'rgba(244,239,230,0.75)' }}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A8BFA9', marginBottom: 18 }}>
              Szolgáltatások
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11 }}>
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link href="/szolgaltatasok" style={{ fontSize: 14, color: 'rgba(244,239,230,0.75)' }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#A8BFA9', marginBottom: 18 }}>
              Elérhetőség
            </div>
            <div style={{ fontSize: 14, lineHeight: 1.8, color: 'rgba(244,239,230,0.85)' }}>
              Bartók Béla út 47.<br />
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

        {/* Bottom bar */}
        <div style={{
          paddingTop: 32,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 12,
          color: 'rgba(244,239,230,0.45)',
          flexWrap: 'wrap',
          gap: 12,
        }}>
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
