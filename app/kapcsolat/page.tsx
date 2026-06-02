'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import { PhoneIcon, CalendarIcon, PinIcon, MailIcon, ClockIcon } from '@/components/icons';
import { useReveal } from '@/app/hooks/useReveal';

export default function ContactPage() {
  return (
    <div style={{ background: 'var(--paper)' }}>
      <Nav />
      <MobileNav />
      <ContactHero />
      <BookingPanel />
      <ContactInfo />
      <Footer />
    </div>
  );
}

function ContactHero() {
  return (
    <section className="mob-pad-60" style={{ padding: '60px 0 40px' }}>
      <div className="container-wide">
        <div className="eyebrow animate-hero" style={{ marginBottom: 18 }}>Kapcsolat</div>
        <h1 className="display animate-hero mob-h1-md" style={{ fontSize: 80, letterSpacing: '-0.035em', maxWidth: 880, animationDelay: '90ms' }}>
          Foglaljon időpontot, vagy keressen minket bármilyen kérdéssel.
        </h1>
      </div>
    </section>
  );
}

const serviceOptions = ['Általános vizsgálat', 'Védőoltás', 'Diagnosztika', 'Sebészet', 'Fogászat', 'Mikrochip'];
const petOptions     = ['Kutya', 'Macska', 'Egyéb kisállat'];
const dayOptions     = ['Hétfő · ápr. 26', 'Kedd · ápr. 27', 'Szerda · ápr. 28', 'Csüt. · ápr. 29', 'Péntek · ápr. 30'];
const timeOptions    = ['09:00', '10:30', '11:00', '14:30', '15:00', '16:30', '17:00', '18:00'];

interface BookingData {
  service: string;
  pet: string;
  day: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

function BookingPanel() {
  const [step, setStep] = useState(0);
  const { ref: revealRef, visible } = useReveal();
  const [data, setData] = useState<BookingData>({
    service: 'Általános vizsgálat',
    pet: 'Kutya',
    day: 'Szerda · ápr. 28',
    time: '14:30',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });

  return (
    <section ref={revealRef as any} style={{ padding: '40px 0 100px' }}>
      <div className="container-wide">
        <div className={`stagger-grid mob-col1${visible ? ' is-visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 16, alignItems: 'flex-start' }}>
          {/* Wizard card */}
          <div style={{ background: '#fff', border: '1px solid var(--stone)', borderRadius: 24, padding: 40 }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 8 }}>Időpontfoglalás</div>
                <h2 className="display" style={{ fontSize: 32, letterSpacing: '-0.025em' }}>
                  {step === 0 ? 'Mit szeretne foglalni?' : step === 1 ? 'Válasszon időpontot' : 'Adatok'}
                </h2>
              </div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)', fontFamily: 'var(--mono)' }}>
                {step + 1} / 3
              </div>
            </div>

            {/* Progress bar */}
            <div style={{ display: 'flex', gap: 6, marginBottom: 32 }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ flex: 1, height: 4, borderRadius: 999, background: i <= step ? 'var(--moss)' : 'var(--stone)', transition: 'background .3s ease' }} />
              ))}
            </div>

            {/* Step 1 */}
            {step === 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <FieldGroup label="Szolgáltatás">
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {serviceOptions.map((s) => (
                      <button
                        key={s}
                        onClick={() => setData({ ...data, service: s })}
                        style={{
                          padding: '12px 18px', borderRadius: 999,
                          border: '1px solid', fontWeight: 500, fontSize: 14,
                          background: data.service === s ? 'var(--ink)' : '#fff',
                          color: data.service === s ? 'var(--bone)' : 'var(--ink)',
                          borderColor: data.service === s ? 'var(--ink)' : 'var(--stone-2)',
                          transition: 'all .15s ease',
                        }}
                      >{s}</button>
                    ))}
                  </div>
                </FieldGroup>
                <FieldGroup label="Páciens">
                  <div style={{ display: 'flex', gap: 8 }}>
                    {petOptions.map((p) => (
                      <button
                        key={p}
                        onClick={() => setData({ ...data, pet: p })}
                        style={{
                          flex: 1, padding: '16px', borderRadius: 14,
                          border: '1px solid', fontWeight: 500, fontSize: 14,
                          background: data.pet === p ? 'var(--moss-tint)' : '#fff',
                          borderColor: data.pet === p ? 'var(--moss)' : 'var(--stone)',
                          transition: 'all .15s ease',
                        }}
                      >{p}</button>
                    ))}
                  </div>
                </FieldGroup>
              </div>
            )}

            {/* Step 2 */}
            {step === 1 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <FieldGroup label="Nap">
                  <div className="no-scrollbar" style={{ display: 'flex', gap: 8, overflowX: 'auto' }}>
                    {dayOptions.map((d) => (
                      <button
                        key={d}
                        onClick={() => setData({ ...data, day: d })}
                        style={{
                          flex: '1 0 130px', padding: '16px 14px', borderRadius: 14,
                          border: '1px solid', textAlign: 'left',
                          background: data.day === d ? 'var(--ink)' : '#fff',
                          color: data.day === d ? 'var(--bone)' : 'var(--ink)',
                          borderColor: data.day === d ? 'var(--ink)' : 'var(--stone)',
                          transition: 'all .15s ease',
                        }}
                      >
                        <div style={{ fontSize: 11, opacity: 0.7, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{d.split(' · ')[0]}</div>
                        <div style={{ fontFamily: 'var(--display)', fontSize: 18, marginTop: 4 }}>{d.split(' · ')[1]}</div>
                      </button>
                    ))}
                  </div>
                </FieldGroup>
                <FieldGroup label="Idő">
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                    {timeOptions.map((t) => (
                      <button
                        key={t}
                        onClick={() => setData({ ...data, time: t })}
                        style={{
                          padding: '14px', borderRadius: 12,
                          border: '1px solid', fontWeight: 500, fontSize: 14,
                          background: data.time === t ? 'var(--moss)' : '#fff',
                          color: data.time === t ? '#fff' : 'var(--ink)',
                          borderColor: data.time === t ? 'var(--moss)' : 'var(--stone)',
                          transition: 'all .15s ease',
                        }}
                      >{t}</button>
                    ))}
                  </div>
                </FieldGroup>
              </div>
            )}

            {/* Step 3 */}
            {step === 2 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                <FormInput label="Az Ön neve" placeholder="Kovács Anna" value={data.name} onChange={(v) => setData({ ...data, name: v })} />
                <div className="mob-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <FormInput label="Telefonszám" placeholder="+36 30 123 4567" value={data.phone} onChange={(v) => setData({ ...data, phone: v })} />
                  <FormInput label="E-mail" placeholder="anna@pelda.hu" value={data.email} onChange={(v) => setData({ ...data, email: v })} />
                </div>
                <FieldGroup label="Megjegyzés (opcionális)">
                  <textarea
                    placeholder="Bármi, amit fontosnak tart megosztani — előzmények, viselkedés, allergia."
                    value={data.notes}
                    onChange={(e) => setData({ ...data, notes: e.target.value })}
                    style={{ width: '100%', minHeight: 100, padding: 16, borderRadius: 12, border: '1px solid var(--stone)', fontSize: 15, fontFamily: 'var(--body)', resize: 'vertical' }}
                  />
                </FieldGroup>
              </div>
            )}

            {/* Navigation */}
            <div style={{ marginTop: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button
                className="btn btn-ghost"
                onClick={() => setStep(Math.max(0, step - 1))}
                style={{ visibility: step === 0 ? 'hidden' : 'visible' }}
              >
                ← Vissza
              </button>
              <button
                className="btn btn-primary"
                style={{ padding: '16px 24px' }}
                onClick={() => setStep(Math.min(2, step + 1))}
              >
                {step < 2 ? 'Tovább' : 'Foglalás megerősítése'} →
              </button>
            </div>
          </div>

          {/* Summary sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: 'var(--bone)', borderRadius: 24, padding: 32 }}>
              <div className="eyebrow" style={{ marginBottom: 18 }}>Foglalás összegzése</div>
              <SummaryRow label="Szolgáltatás" value={data.service} />
              <SummaryRow label="Páciens" value={data.pet} />
              <SummaryRow label="Nap" value={data.day} />
              <SummaryRow label="Idő" value={data.time} last />
              <div style={{ marginTop: 24, padding: 18, background: '#fff', borderRadius: 14, fontSize: 13, color: 'var(--ink-3)', lineHeight: 1.55 }}>
                A foglalás 24 órán belül lemondható. Visszaigazolást SMS-ben és e-mailben küldünk.
              </div>
            </div>
            <div style={{ background: 'var(--ink)', color: 'var(--bone)', borderRadius: 24, padding: 32 }}>
              <PhoneIcon size={20} />
              <div style={{ fontFamily: 'var(--display)', fontSize: 22, letterSpacing: '-0.02em', marginTop: 16 }}>
                Inkább telefonon?
              </div>
              <p style={{ fontSize: 13, color: 'rgba(244,239,230,0.65)', marginTop: 6, lineHeight: 1.55 }}>
                Hétköznap 8–19, szombaton 9–14 között hívjon minket.
              </p>
              <a href="tel:+3652123456" style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 600, color: 'var(--moss-soft)' }}>
                +36 52 123 456 →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FieldGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)', marginBottom: 12 }}>{label}</div>
      {children}
    </div>
  );
}

function FormInput({ label, placeholder, value, onChange }: { label: string; placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <FieldGroup label={label}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ width: '100%', padding: '14px 16px', borderRadius: 12, border: '1px solid var(--stone)', fontSize: 15 }}
      />
    </FieldGroup>
  );
}

function SummaryRow({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 0', borderBottom: last ? 'none' : '1px solid var(--stone)' }}>
      <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{label}</div>
      <div style={{ fontFamily: 'var(--display)', fontSize: 15, fontWeight: 500, letterSpacing: '-0.01em' }}>{value}</div>
    </div>
  );
}

function ContactInfo() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as any} style={{ padding: '60px 0 100px' }}>
      <div className="container-wide">
        <div className={`stagger-grid mob-col1${visible ? ' is-visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 16 }}>
          {/* Stylized map */}
          <div className="mob-photo-hero" style={{ borderRadius: 24, overflow: 'hidden', minHeight: 420, position: 'relative', background: '#E5E0D5' }}>
            <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }}>
              <rect width="800" height="500" fill="#E5E0D5" />
              {/* River */}
              <path d="M -50 320 Q 200 280 400 340 T 850 300" stroke="#A8BFA9" strokeWidth="40" fill="none" opacity="0.5" />
              {/* Main streets */}
              <g stroke="#FAF7F1" strokeWidth="14" fill="none">
                <path d="M 0 100 L 800 130" />
                <path d="M 0 200 L 800 220" />
                <path d="M 0 400 L 800 430" />
                <path d="M 150 0 L 180 500" />
                <path d="M 380 0 L 410 500" />
                <path d="M 600 0 L 630 500" />
              </g>
              {/* Minor streets */}
              <g stroke="#FAF7F1" strokeWidth="6" fill="none" opacity="0.7">
                <path d="M 0 60 L 800 80" />
                <path d="M 0 260 L 800 280" />
                <path d="M 0 350 L 800 370" />
                <path d="M 80 0 L 100 500" />
                <path d="M 260 0 L 280 500" />
                <path d="M 480 0 L 510 500" />
                <path d="M 720 0 L 740 500" />
              </g>
              {/* City blocks */}
              <g fill="#D4CEC0" opacity="0.5">
                <rect x="100" y="220" width="60" height="40" />
                <rect x="200" y="220" width="60" height="40" />
                <rect x="300" y="140" width="80" height="50" />
                <rect x="430" y="240" width="60" height="40" />
                <rect x="540" y="140" width="60" height="50" />
                <rect x="640" y="220" width="80" height="50" />
              </g>
              {/* Location marker */}
              <g transform="translate(400 250)">
                <circle r="40" fill="rgba(92,122,102,0.2)" />
                <circle r="22" fill="rgba(92,122,102,0.35)" />
                <circle r="12" fill="#5C7A66" />
                <circle r="4" fill="#fff" />
              </g>
            </svg>

            {/* Address overlay */}
            <div style={{ position: 'absolute', left: 24, top: 24, background: 'var(--paper)', borderRadius: 14, padding: '14px 18px', boxShadow: '0 8px 24px rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--moss-tint)', color: 'var(--moss-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PinIcon size={16} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Bartók Béla út 47.</div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>4032 Debrecen</div>
              </div>
            </div>

            {/* Map buttons */}
            <div style={{ position: 'absolute', right: 24, bottom: 24, display: 'flex', gap: 8 }}>
              <a
                href="https://maps.google.com/?q=Bart%C3%B3k+B%C3%A9la+%C3%BAt+47+Debrecen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: 'var(--paper)', color: 'var(--ink)', padding: '12px 16px', fontSize: 13, boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
              >
                Útvonaltervező
              </a>
              <a
                href="https://maps.google.com/?q=Bart%C3%B3k+B%C3%A9la+%C3%BAt+47+Debrecen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ background: 'var(--ink)', color: 'var(--bone)', padding: '12px 16px', fontSize: 13 }}
              >
                Nagyobb térkép
              </a>
            </div>
          </div>

          {/* Contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <ContactCard
              icon={<PinIcon />}
              title="Cím"
              lines={['Bartók Béla út 47.', '4032 Debrecen, Magyarország']}
              hint="Ingyenes parkolás · Akadálymentes bejárat"
            />
            <ContactCard
              icon={<PhoneIcon />}
              title="Telefon"
              lines={['+36 52 123 456', '+36 30 911 24 24 (sürgősségi)']}
            />
            <ContactCard
              icon={<MailIcon />}
              title="E-mail"
              lines={['hello@bartokvet.hu', 'idopont@bartokvet.hu']}
            />
            <ContactCard
              icon={<ClockIcon />}
              title="Nyitvatartás"
              lines={['H–P · 08:00 – 19:00', 'Szo · 09:00 – 14:00', 'V · zárva (sürgősségi)']}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, lines, hint }: { icon: React.ReactNode; title: string; lines: string[]; hint?: string }) {
  return (
    <div style={{ background: '#fff', border: '1px solid var(--stone)', borderRadius: 16, padding: 22, display: 'flex', gap: 16 }}>
      <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--paper)', color: 'var(--moss)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{title}</div>
        <div style={{ marginTop: 6, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {lines.map((l, i) => (
            <div key={i} style={{ fontSize: 15, fontWeight: i === 0 ? 600 : 500, color: i === 0 ? 'var(--ink)' : 'var(--ink-2)' }}>{l}</div>
          ))}
        </div>
        {hint && <div style={{ marginTop: 10, fontSize: 12, color: 'var(--ink-3)' }}>{hint}</div>}
      </div>
    </div>
  );
}
