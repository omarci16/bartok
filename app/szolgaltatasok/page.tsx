'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import MobileNav from '@/components/MobileNav';
import Footer from '@/components/Footer';
import StickyBookCTA from '@/components/StickyBookCTA';
import BookingCTA from '@/components/BookingCTA';
import {
  StethoIcon, SyringeIcon, ScanIcon, ScalpelIcon, ToothIcon, ChipIcon,
  CheckIcon, PlusIcon, MinusIcon,
} from '@/components/icons';
import { useReveal } from '@/app/hooks/useReveal';

export default function ServicesPage() {
  return (
    <div style={{ background: 'var(--paper)' }}>
      <Nav />
      <MobileNav />
      <ServicesHero />
      <ServicesCategoriesNav />
      <ServicesList />
      <FAQSection />
      <BookingCTA />
      <Footer />
      <StickyBookCTA />
    </div>
  );
}

function ServicesHero() {
  return (
    <section className="mob-pad-80" style={{ padding: '80px 0 60px' }}>
      <div className="container-wide">
        <div className="eyebrow animate-hero" style={{ marginBottom: 18 }}>Szolgáltatások</div>
        <div className="mob-col1" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'flex-end' }}>
          <h1 className="display animate-hero mob-h1-md" style={{ fontSize: 80, letterSpacing: '-0.035em', animationDelay: '90ms' }}>
            Teljes körű ellátás — egy modern, jól felszerelt rendelőben.
          </h1>
          <p className="animate-hero" style={{ fontSize: 17, color: 'var(--ink-3)', lineHeight: 1.6, paddingBottom: 12, animationDelay: '180ms' }}>
            A megelőző vizsgálatoktól a komplex műtétekig, mindent egy helyen kínálunk. Helyszíni labor, digitális képalkotás, és tapasztalt szakorvosok — hogy kedvence a legjobb gondoskodást kapja.
          </p>
        </div>
      </div>
    </section>
  );
}

const cats = [
  'Általános vizsgálat', 'Védőoltások', 'Diagnosztika', 'Sebészet',
  'Sürgősségi ellátás', 'Fogászat', 'Mikrochip & útlevél',
];

function ServicesCategoriesNav() {
  const [active, setActive] = useState(0);
  return (
    <section style={{ padding: '20px 0 40px', borderTop: '1px solid var(--stone)', borderBottom: '1px solid var(--stone)' }}>
      <div className="container-wide" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {cats.map((c, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              fontSize: 13, fontWeight: 500,
              padding: '10px 16px', borderRadius: 999,
              background: active === i ? 'var(--ink)' : 'transparent',
              color: active === i ? 'var(--bone)' : 'var(--ink-2)',
              border: active === i ? 'none' : '1px solid var(--stone-2)',
              transition: 'all .15s ease',
            }}
          >{c}</button>
        ))}
      </div>
    </section>
  );
}

const serviceData = [
  {
    icon: <StethoIcon />,
    title: 'Általános vizsgálat',
    sub: 'Prevenció & szűrés',
    desc: 'Éves egészségügyi szűrés, általános állapotfelmérés, súlyellenőrzés, prevenciós tanácsadás. Az alapja minden hosszú, egészséges életnek.',
    points: ['Fizikális vizsgálat', 'Életkor-specifikus szűrés', 'Táplálkozási tanácsadás', 'Súly- és testállapot-kontroll'],
    tone: 'moss',
  },
  {
    icon: <SyringeIcon />,
    title: 'Védőoltások',
    sub: 'Egyéni oltási rend',
    desc: 'Életkor és életmód szerint összeállított oltási rend. Mind az alap- (szopornyica, parvo, veszettség), mind a kiegészítő oltásokat kínáljuk.',
    points: ['Kölyökoltási csomag', 'Éves emlékeztető', 'Veszettség (utazáshoz is)', 'Lyme-kór, leptospirózis'],
    tone: 'warm',
  },
  {
    icon: <ScanIcon />,
    title: 'Diagnosztika',
    sub: 'Helyben, gyorsan',
    desc: 'Helyszíni vérlabor, digitális röntgen és ultrahang. A legtöbb eredmény percek alatt rendelkezésre áll, így nem kell napokat várnia a diagnózisra.',
    points: ['Digitális röntgen', 'Ultrahang', 'In-house vérlabor', 'Vizelet- és bőrvizsgálat'],
    tone: 'ink',
  },
  {
    icon: <ScalpelIcon />,
    title: 'Sebészet',
    sub: 'Tervezett & sürgősségi',
    desc: 'Modern műtőnk lehetővé teszi a tervezett (ivartalanítás, daganat-eltávolítás) és a sürgősségi beavatkozásokat. Folyamatos altatás-monitorozás.',
    points: ['Lágy szöveti műtétek', 'Ivartalanítás', 'Daganat-eltávolítás', 'Trauma-ellátás'],
    tone: 'moss',
  },
  {
    icon: <ToothIcon />,
    title: 'Fogászat',
    sub: 'Szájüregi egészség',
    desc: 'A fogkő nem csupán esztétikai kérdés. Ultrahangos fogkő-eltávolítás, fogászati röntgen és szájüregi szűrés altatásban.',
    points: ['Fogkő-eltávolítás', 'Fogászati röntgen', 'Foghúzás', 'Szájhigiéniai tanácsadás'],
    tone: 'warm',
  },
  {
    icon: <ChipIcon />,
    title: 'Mikrochip & EU útlevél',
    sub: 'Hivatalos azonosítás',
    desc: 'Hivatalosan regisztrált mikrochip-beültetés, és teljes körű kisállatútlevél-kiállítás külföldi utazáshoz.',
    points: ['ISO mikrochip beültetés', 'PetVetData regisztráció', 'EU kisállatútlevél', 'Utazási tanácsadás'],
    tone: 'ink',
  },
];

function ServicesList() {
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container-wide">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {serviceData.map((s, i) => (
            <ServiceRow key={i} s={s} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ s, reverse }: { s: typeof serviceData[0]; reverse: boolean }) {
  const { ref, visible } = useReveal();
  const photoClass = s.tone === 'ink' ? 'photo-ink' : s.tone === 'warm' ? 'photo-warm' : 'photo-moss';
  return (
    <div ref={ref as any} className={`reveal reveal-up mob-col1${visible ? ' is-visible' : ''}`} style={{
      background: '#fff', border: '1px solid var(--stone)', borderRadius: 24,
      padding: 16,
      display: 'grid', gridTemplateColumns: reverse ? '1fr 1.1fr' : '1.1fr 1fr',
      gap: 16, alignItems: 'stretch',
    }}>
      <div className="mob-order-1" style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', order: reverse ? 2 : 1 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--moss-tint)', color: 'var(--moss-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {s.icon}
            </div>
            <div className="eyebrow">{s.sub}</div>
          </div>
          <h3 className="display mob-h3" style={{ fontSize: 40, letterSpacing: '-0.03em' }}>{s.title}</h3>
          <p style={{ fontSize: 16, color: 'var(--ink-3)', marginTop: 16, lineHeight: 1.6, maxWidth: 480 }}>{s.desc}</p>
          <ul className="mob-form-grid" style={{ listStyle: 'none', marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {s.points.map((p, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink-2)' }}>
                <div style={{ width: 18, height: 18, borderRadius: 999, background: 'var(--paper-2)', color: 'var(--moss)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <CheckIcon size={11} />
                </div>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="mob-btn-stack" style={{ marginTop: 32, display: 'flex', gap: 8 }}>
          <button className="btn btn-secondary" style={{ padding: '14px 18px', fontSize: 14 }}>Részletes leírás</button>
          <Link href="/kapcsolat" className="btn btn-ghost btn-arrow" style={{ padding: '14px 18px', fontSize: 14, color: 'var(--moss)' }}>Időpontot kérek</Link>
        </div>
      </div>
      <div className={`photo ${photoClass} photo-dark mob-order-2 mob-photo-h`} style={{ borderRadius: 16, minHeight: 380, order: reverse ? 1 : 2 }}>
        <span className="photo-label">[ photo · {s.title.toLowerCase()} in action ]</span>
      </div>
    </div>
  );
}

const faqItems = [
  {
    q: 'Hogyan tudok időpontot foglalni?',
    a: 'Online időpontfoglaló rendszerünkön keresztül a legegyszerűbb (24/7), de telefonon is fogadjuk a foglalásokat hétköznap 8 és 19 óra között. Visszaigazolást SMS-ben és e-mailben küldünk.',
  },
  {
    q: 'Mennyibe kerül egy általános vizsgálat?',
    a: 'Egy általános állapotfelmérés ára 9 500 Ft-tól indul, a beavatkozások és vizsgálatok díjszabását részletesen az árlistánkban közöljük, illetve telefonon szívesen tájékoztatjuk.',
  },
  {
    q: 'Fogadják a TAEG/biztosítási kártyákat?',
    a: 'Több hazai kisállat-egészségbiztosítóval is együttműködünk (Genertel, Allianz, Európai Utazási). Időpontfoglaláskor jelezze a biztosítóját, és előkészítjük a szükséges dokumentumokat.',
  },
  {
    q: 'Mit hozzak az első alkalommal?',
    a: 'Hozza magával az oltási könyvet (ha van), a korábbi leleteket, és kedvencének kedvenc takaróját vagy játékát — ez sokat segít a stressz csökkentésében.',
  },
  {
    q: 'Sürgős esetben mit tegyek?',
    a: 'Hívjon azonnal: +36 30 911 24 24. Nyitvatartási időn kívül is elérhetők vagyunk a legsúlyosabb esetekben. A telefonon adott útmutatás már az érkezés előtt segíthet.',
  },
];

function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);
  const { ref, visible } = useReveal();

  return (
    <section ref={ref as any} className="mob-pad-100" style={{ padding: '100px 0', background: 'var(--bone)' }}>
      <div className="container-wide">
        <div className={`stagger-grid mob-col1${visible ? ' is-visible' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'flex-start' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Gyakori kérdések</div>
            <h2 className="display mob-h2-sm" style={{ fontSize: 44, letterSpacing: '-0.03em' }}>
              Amit a legtöbben kérdeznek.
            </h2>
            <p style={{ fontSize: 15, color: 'var(--ink-3)', marginTop: 18, lineHeight: 1.6 }}>
              Nem találja a választ? Hívjon, vagy írjon bátran — szívesen segítünk.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqItems.map((item, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--stone)' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '24px 0',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24,
                    fontFamily: 'var(--display)', fontSize: 22, letterSpacing: '-0.02em', fontWeight: 500,
                  }}
                >
                  {item.q}
                  <div style={{
                    width: 36, height: 36, borderRadius: 999,
                    background: open === i ? 'var(--ink)' : 'var(--paper-2)',
                    color: open === i ? 'var(--bone)' : 'var(--ink)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {open === i ? <MinusIcon size={16} /> : <PlusIcon size={16} />}
                  </div>
                </button>
                {open === i && (
                  <div style={{ paddingBottom: 24, fontSize: 16, lineHeight: 1.65, color: 'var(--ink-3)', maxWidth: 640 }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--stone)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
