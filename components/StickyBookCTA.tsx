'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CalendarIcon } from './icons';

export default function StickyBookCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      right: 28,
      bottom: 28,
      zIndex: 40,
      transform: show ? 'translateY(0)' : 'translateY(120%)',
      opacity: show ? 1 : 0,
      transition: 'transform .35s ease, opacity .35s ease',
      pointerEvents: show ? 'auto' : 'none',
    }}>
      <Link
        href="/kapcsolat"
        className="btn btn-primary"
        style={{
          padding: '18px 24px',
          fontSize: 15,
          boxShadow: '0 18px 40px -12px rgba(22,24,28,0.35), 0 4px 10px rgba(22,24,28,0.12)',
        }}
      >
        <CalendarIcon size={16} /> Időpontfoglalás
      </Link>
    </div>
  );
}
