'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { GlobeIcon, PhoneIcon, CalendarIcon } from './icons';

const navItems = [
  { href: '/',               label: 'Kezdőlap' },
  { href: '/szolgaltatasok', label: 'Szolgáltatások' },
  { href: '/allatorvosaink', label: 'Állatorvosaink' },
  { href: '/surgossegi',     label: 'Sürgősség' },
  { href: '/kapcsolat',      label: 'Kapcsolat' },
];

export default function Nav({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const pathname = usePathname();
  const inv = variant === 'dark';

  return (
    <>
      {/* Desktop nav */}
      <header
        className="nav-desktop"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: inv ? 'rgba(22,24,28,0.92)' : 'rgba(250,247,241,0.86)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${inv ? 'rgba(255,255,255,0.06)' : 'var(--stone)'}`,
        }}
      >
        <div
          className="container-wide"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}
        >
          <Link href="/">
            <Logo inverse={inv} />
          </Link>

          <nav style={{ display: 'flex', gap: 4 }}>
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    padding: '10px 14px',
                    borderRadius: 999,
                    color: active
                      ? inv ? '#F4EFE6' : 'var(--ink)'
                      : inv ? 'rgba(244,239,230,0.65)' : 'var(--ink-3)',
                    background: active
                      ? inv ? 'rgba(255,255,255,0.08)' : 'var(--paper-2)'
                      : 'transparent',
                    transition: 'all .15s ease',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              fontSize: 13, fontWeight: 500,
              color: inv ? 'rgba(244,239,230,0.65)' : 'var(--ink-3)',
            }}>
              <GlobeIcon size={14} /> HU
            </span>
            <a
              href="tel:+3652123456"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                fontSize: 13, fontWeight: 600,
                color: inv ? '#F4EFE6' : 'var(--ink)',
                padding: '10px 14px',
              }}
            >
              <PhoneIcon size={15} /> +36 52 123 456
            </a>
            <Link href="/kapcsolat" className="btn btn-primary" style={{ padding: '13px 18px', fontSize: 14 }}>
              <CalendarIcon size={15} /> Időpontfoglalás
            </Link>
          </div>
        </div>
      </header>

      <style>{`
        @media (max-width: 767px) { .nav-desktop { display: none !important; } }
      `}</style>
    </>
  );
}
