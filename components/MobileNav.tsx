'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { MenuIcon, CloseIcon, CalendarIcon, PhoneIcon, ArrowIcon } from './icons';

const navItems = [
  { href: '/',               label: 'Kezdőlap' },
  { href: '/szolgaltatasok', label: 'Szolgáltatások' },
  { href: '/allatorvosaink', label: 'Állatorvosaink' },
  { href: '/surgossegi',     label: 'Sürgősség' },
  { href: '/kapcsolat',      label: 'Kapcsolat' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header
        className="nav-mobile"
        style={{
          position: 'sticky', top: 0, zIndex: 50,
          background: 'rgba(250,247,241,0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--stone)',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
        }}
      >
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: 42, height: 42, borderRadius: 999,
            background: 'var(--paper-2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>

      {open && (
        <div style={{
          position: 'fixed', inset: '64px 0 0 0', zIndex: 49,
          background: 'var(--paper)',
          padding: 24,
          display: 'flex', flexDirection: 'column',
          overflowY: 'auto',
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: 'var(--display)',
                    fontSize: 28,
                    letterSpacing: '-0.02em',
                    fontWeight: 500,
                    padding: '14px 0',
                    borderBottom: '1px solid var(--stone)',
                    color: active ? 'var(--moss)' : 'var(--ink)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {item.label}
                  {active && <ArrowIcon size={18} />}
                </Link>
              );
            })}
          </nav>

          <div style={{ marginTop: 'auto', paddingTop: 32, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Link
              href="/kapcsolat"
              className="btn btn-primary"
              style={{ width: '100%', padding: '18px', justifyContent: 'center' }}
              onClick={() => setOpen(false)}
            >
              <CalendarIcon size={16} /> Időpontfoglalás
            </Link>
            <a href="tel:+3652123456" className="btn btn-secondary" style={{ width: '100%', padding: '18px', justifyContent: 'center' }}>
              <PhoneIcon size={16} /> +36 52 123 456
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .nav-mobile { display: none !important; } }
      `}</style>
    </>
  );
}
