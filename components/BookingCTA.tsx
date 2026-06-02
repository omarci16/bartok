import Link from 'next/link';
import { CalendarIcon, PhoneIcon } from './icons';

export default function BookingCTA() {
  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container-wide">
        <div className="mob-cta-grid mob-banner-pad" style={{
          background: 'var(--moss)',
          color: 'var(--bone)',
          borderRadius: 28,
          padding: '72px 56px',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 48,
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative circles */}
          <div style={{ position: 'absolute', left: -60, bottom: -60, width: 280, height: 280, borderRadius: '50%', border: '1px solid rgba(244,239,230,0.15)' }} />
          <div style={{ position: 'absolute', left: 40, bottom: 40, width: 180, height: 180, borderRadius: '50%', border: '1px solid rgba(244,239,230,0.15)' }} />

          <div style={{ position: 'relative' }}>
            <h2 className="display mob-h2-md" style={{ fontSize: 48, letterSpacing: '-0.03em' }}>
              Foglaljon időpontot ma — vizsgálat akár holnap.
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(244,239,230,0.8)', marginTop: 18, maxWidth: 480, lineHeight: 1.55 }}>
              Egyszerű, gyors online foglalás. Visszaigazolást SMS-ben és e-mailben küldünk.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, position: 'relative' }}>
            <Link href="/kapcsolat" className="btn" style={{ background: 'var(--bone)', color: 'var(--ink)', padding: '20px 26px', fontSize: 15 }}>
              <CalendarIcon size={16} /> Időpontfoglalás
            </Link>
            <a href="tel:+3652123456" className="btn" style={{ background: 'transparent', color: 'var(--bone)', border: '1px solid rgba(244,239,230,0.3)', padding: '20px 26px', fontSize: 15 }}>
              <PhoneIcon size={16} /> +36 52 123 456
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
