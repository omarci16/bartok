'use client';

import Link from 'next/link';
import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import StickyBookCTA from '@/components/StickyBookCTA';
import BookingCTA from '@/components/BookingCTA';
import { CheckIcon, CalendarIcon, HeartIcon, StethoIcon, PlusIcon } from '@/components/icons';
import { useReveal } from '@/app/hooks/useReveal';

export default function DoctorsPage() {
  return (
    <div style={{ background: 'var(--paper)' }}>
      <Nav />
      <MobileNav />
      <DoctorsHero />
      <DoctorProfile
        name="Dr. Szűcs Zsolt Tamás"
        role="Alapító állatorvos · Sebészet"
        years="14 év"
        photoTone="ink"
        bio="Zsolt Debrecenben végezte tanulmányait az Állatorvostudományi Egyetemen, majd Bécsben specializálódott lágy szöveti sebészetre. 14 éves gyakorlattal a háta mögött nemcsak technikai pontosságot, de türelmes, családbarát hozzáállást is hoz minden vizsgálathoz."
        specs={['Lágy szöveti sebészet', 'Ortopédia', 'Onkológiai műtétek', 'Belgyógyászat']}
        approach="Egy jó orvos elsősorban hallgat. Mielőtt bármit teszek, megpróbálom megérteni a kedvenc szokásait, és a gazdi aggodalmait. A bizalom és a nyugalom fele a gyógyulásnak."
        creds={['MÁOK tag · 2012 óta', 'Sebészeti szakirány · Bécs, 2016', 'Endoszkópos képzés · Budapest', 'Évi 200+ műtéti beavatkozás']}
        reverse={false}
      />
      <DoctorProfile
        name="Dr. Győrfi László"
        role="Alapító állatorvos · Belgyógyászat"
        years="11 év"
        photoTone="moss"
        bio="László Budapesten szerzett diplomát, majd belgyógyászati és kardiológiai területen mélyítette el tudását. Különleges figyelmet fordít az idős állatok kezelésére és a krónikus betegségek menedzselésére."
        specs={['Belgyógyászat', 'Kardiológia', 'Geriátria', 'Ultrahang-diagnosztika']}
        approach="Az állatorvoslás csapatmunka — orvos, gazdi és páciens együtt. A leggondosabb terápia is csak akkor működik, ha a gazdi tisztán látja, miért és hogyan."
        creds={['MÁOK tag · 2015 óta', 'Kardiológiai továbbképzés · Bécs', 'Ultrahang-diagnosztika tanúsítvány', '500+ krónikus páciens gondozása']}
        reverse={true}
      />
      <ValuesSection />
      <BookingCTA />
      <Footer />
      <StickyBookCTA />
    </div>
  );
}

function DoctorsHero() {
  return (
    <section className="mob-pad-80" style={{ padding: '80px 0 60px' }}>
      <div className="container-wide">
        <div className="eyebrow animate-hero" style={{ marginBottom: 18 }}>Állatorvosaink</div>
        <div className="mob-col1" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'flex-end' }}>
          <h1 className="display animate-hero mob-h1-md" style={{ fontSize: 80, letterSpacing: '-0.035em', animationDelay: '90ms' }}>
            Két orvos, közös elv:{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--moss)', fontWeight: 400 }}>türelem</em>{' '}
            és pontosság.
          </h1>
          <p className="animate-hero" style={{ fontSize: 17, color: 'var(--ink-3)', lineHeight: 1.6, paddingBottom: 12, animationDelay: '180ms' }}>
            Egy klinika annyit ér, amennyit az orvosai. Rendelőnket úgy építettük fel, hogy minden páciens annak az orvosnak a kezei közé kerüljön, aki a legtöbbet tudja érte tenni.
          </p>
        </div>
      </div>
    </section>
  );
}

interface DoctorProfileProps {
  name: string;
  role: string;
  years: string;
  photoTone: string;
  bio: string;
  specs: string[];
  approach: string;
  creds: string[];
  reverse: boolean;
}

function DoctorProfile({ name, role, years, photoTone, bio, specs, approach, creds, reverse }: DoctorProfileProps) {
  const { ref, visible } = useReveal();
  const photoClass = photoTone === 'ink' ? 'photo-ink photo-dark' : 'photo-moss photo-dark';
  return (
    <section ref={ref as any} style={{ padding: '60px 0', borderTop: '1px solid var(--stone)' }}>
      <div className="container-wide">
        <div className={`stagger-grid mob-col1${visible ? ' is-visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 64, alignItems: 'flex-start' }}>
          {/* Photo col */}
          <div className="mob-no-sticky" style={{ order: reverse ? 2 : 1, position: 'sticky', top: 100 }}>
            <div className={`photo ${photoClass}`} style={{ aspectRatio: '4/5', borderRadius: 24 }}>
              <span className="photo-label">[ portrait · {name} ]</span>
            </div>
            <div style={{ marginTop: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <span className="chip chip-dot">Új pácienseket fogad</span>
              <span className="chip chip-stone">{years}</span>
            </div>
          </div>

          {/* Content col */}
          <div style={{ order: reverse ? 1 : 2, paddingTop: 12 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>{role}</div>
            <h2 className="display mob-h2-xl" style={{ fontSize: 56, letterSpacing: '-0.03em' }}>{name}</h2>
            <p style={{ fontSize: 17, color: 'var(--ink-3)', marginTop: 20, lineHeight: 1.65 }}>{bio}</p>

            {/* Specialisations */}
            <div style={{ marginTop: 36, padding: '28px 0', borderTop: '1px solid var(--stone)', borderBottom: '1px solid var(--stone)' }}>
              <div className="eyebrow eyebrow-ink" style={{ marginBottom: 14 }}>Szakterületek</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {specs.map((s, i) => (
                  <span key={i} style={{ padding: '8px 14px', borderRadius: 999, background: 'var(--bone)', fontSize: 14, fontWeight: 500 }}>{s}</span>
                ))}
              </div>
            </div>

            {/* Pull quote */}
            <blockquote style={{
              marginTop: 36, padding: 32,
              background: 'var(--bone)', borderRadius: 20,
              fontFamily: 'var(--display)', fontSize: 24, lineHeight: 1.4, letterSpacing: '-0.015em',
              fontStyle: 'italic', color: 'var(--ink-2)',
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: 16, left: 16, fontSize: 60, fontFamily: 'var(--display)', color: 'var(--moss)', lineHeight: 0.8 }}>"</div>
              <div style={{ paddingLeft: 28 }}>{approach}</div>
            </blockquote>

            {/* Credentials */}
            <div style={{ marginTop: 36 }}>
              <div className="eyebrow eyebrow-ink" style={{ marginBottom: 18 }}>Képzettség & tagság</div>
              <ul className="mob-form-grid" style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {creds.map((c, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink-2)' }}>
                    <div style={{ width: 20, height: 20, borderRadius: 999, background: 'var(--moss)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckIcon size={11} />
                    </div>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="mob-btn-stack" style={{ marginTop: 40, display: 'flex', gap: 10 }}>
              <Link href="/kapcsolat" className="btn btn-primary" style={{ padding: '16px 22px' }}>
                <CalendarIcon size={16} /> Időpontot kérek
              </Link>
              <Link href="/kapcsolat" className="btn btn-secondary" style={{ padding: '16px 22px' }}>Üzenet küldése</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const values = [
  { icon: <HeartIcon />, title: 'Türelem',              desc: 'Soha nem siettetünk. Egy nyugodt vizsgálat fele a diagnózisnak.' },
  { icon: <StethoIcon />, title: 'Őszinte kommunikáció', desc: 'Nem ködösítünk. Elmondjuk, mi a helyzet, mi a lehetőség, mi az ára.' },
  { icon: <CheckIcon />,  title: 'Bizonyítékon alapuló', desc: 'Csak azokat a kezeléseket javasoljuk, amelyekre van klinikai bizonyíték.' },
  { icon: <PlusIcon />,   title: 'Folyamatos képzés',   desc: 'Évente több külföldi szakmai továbbképzésen veszünk részt.' },
];

function ValuesSection() {
  const { ref, visible } = useReveal();
  return (
    <section ref={ref as any} style={{ padding: '100px 0' }}>
      <div className="container-wide">
        <div className={`reveal reveal-up${visible ? ' is-visible' : ''}`} style={{ marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Értékeink</div>
          <h2 className="display mob-h2-md" style={{ fontSize: 48, letterSpacing: '-0.03em', maxWidth: 720 }}>
            A jó állatorvoslás négy alapszabálya — amelyhez tartjuk magunkat.
          </h2>
        </div>
        <div className={`stagger-grid mob-col2${visible ? ' is-visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {values.map((v, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid var(--stone)', borderRadius: 20, padding: 28, minHeight: 220, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--moss-tint)', color: 'var(--moss-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {v.icon}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--display)', fontSize: 22, letterSpacing: '-0.02em', fontWeight: 500 }}>{v.title}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 6, lineHeight: 1.55 }}>{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
