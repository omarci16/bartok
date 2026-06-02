export default function Logo({ inverse = false }: { inverse?: boolean }) {
  const c = inverse ? '#F4EFE6' : '#16181C';
  const accent = '#5C7A66';

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width="34" height="34" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="19" fill="none" stroke={c} strokeWidth="1.4" />
        <path d="M14 22 Q20 12 26 22" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="22" r="2.4" fill={accent} />
        <circle cx="13" cy="17" r="1.6" fill={c} />
        <circle cx="27" cy="17" r="1.6" fill={c} />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{
          fontFamily: 'var(--display)',
          fontWeight: 600,
          fontSize: 16,
          letterSpacing: '-0.02em',
          color: c,
        }}>Bartók</span>
        <span style={{
          fontFamily: 'var(--body)',
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: inverse ? '#A8BFA9' : '#5C7A66',
          marginTop: 3,
        }}>Állatorvosi Rendelő</span>
      </div>
    </div>
  );
}
