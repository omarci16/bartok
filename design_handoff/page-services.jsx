/* Services page */
/* global React, Icon */

function ServicesPage({ onNav }) {
  return (
    <div style={{ background: 'var(--paper)' }}>
      <Nav active="services" onNav={onNav}/>
      <ServicesHero/>
      <ServicesCategoriesNav/>
      <ServicesList/>
      <FAQSection/>
      <BookingCTA onNav={onNav}/>
      <Footer onNav={onNav}/>
      <StickyBookCTA onNav={onNav}/>
    </div>
  );
}

function ServicesHero() {
  return (
    <section style={{ padding: '80px 0 60px' }}>
      <div className="container-wide">
        <div className="eyebrow" style={{ marginBottom: 18 }}>Szolgáltatások</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'flex-end' }}>
          <h1 className="display" style={{ fontSize: 80, letterSpacing: '-0.035em' }}>
            Teljes körű ellátás — egy modern, jól felszerelt rendelőben.
          </h1>
          <p style={{ fontSize: 17, color: 'var(--ink-3)', lineHeight: 1.6, paddingBottom: 12 }}>
            A megelőző vizsgálatoktól a komplex műtétekig, mindent egy helyen kínálunk. Helyszíni labor, digitális képalkotás, és tapasztalt szakorvosok — hogy kedvence a legjobb gondoskodást kapja.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesCategoriesNav() {
  const cats = [
    'Általános vizsgálat', 'Védőoltások', 'Diagnosztika', 'Sebészet',
    'Sürgősségi ellátás', 'Fogászat', 'Mikrochip & útlevél',
  ];
  return (
    <section style={{ padding: '20px 0 40px', borderTop: '1px solid var(--stone)', borderBottom: '1px solid var(--stone)' }}>
      <div className="container-wide" style={{ display: 'flex', gap: 8, overflow: 'hidden', flexWrap: 'wrap' }}>
        {cats.map((c, i) => (
          <a href="#" key={i}
            style={{
              fontSize: 13, fontWeight: 500,
              padding: '10px 16px', borderRadius: 999,
              background: i === 0 ? 'var(--ink)' : 'transparent',
              color: i === 0 ? 'var(--bone)' : 'var(--ink-2)',
              border: i === 0 ? 'none' : '1px solid var(--stone-2)',
            }}
          >{c}</a>
        ))}
      </div>
    </section>
  );
}

function ServicesList() {
  const services = [
    {
      i: <Icon.Stetho/>,
      t: 'Általános vizsgálat',
      sub: 'Prevenció & szűrés',
      d: 'Éves egészségügyi szűrés, általános állapotfelmérés, súlyellenőrzés, prevenciós tanácsadás. Az alapja minden hosszú, egészséges életnek.',
      points: ['Fizikális vizsgálat', 'Életkor-specifikus szűrés', 'Táplálkozási tanácsadás', 'Súly- és testállapot-kontroll'],
      tone: 'moss',
    },
    {
      i: <Icon.Syringe/>,
      t: 'Védőoltások',
      sub: 'Egyéni oltási rend',
      d: 'Életkor és életmód szerint összeállított oltási rend. Mind az alap- (szopornyica, parvo, veszettség), mind a kiegészítő oltásokat kínáljuk.',
      points: ['Kölyökoltási csomag', 'Éves emlékeztető', 'Veszettség (utazáshoz is)', 'Lyme-kór, leptospirózis'],
      tone: 'warm',
    },
    {
      i: <Icon.Scan/>,
      t: 'Diagnosztika',
      sub: 'Helyben, gyorsan',
      d: 'Helyszíni vérlabor, digitális röntgen és ultrahang. A legtöbb eredmény percek alatt rendelkezésre áll, így nem kell napokat várnia a diagnózisra.',
      points: ['Digitális röntgen', 'Ultrahang', 'In-house vérlabor', 'Vizelet- és bőrvizsgálat'],
      tone: 'ink',
    },
    {
      i: <Icon.Scalpel/>,
      t: 'Sebészet',
      sub: 'Tervezett & sürgősségi',
      d: 'Modern műtőnk lehetővé teszi a tervezett (ivartalanítás, daganat-eltávolítás) és a sürgősségi beavatkozásokat. Folyamatos altatás-monitorozás.',
      points: ['Lágy szöveti műtétek', 'Ivartalanítás', 'Daganat-eltávolítás', 'Trauma-ellátás'],
      tone: 'moss',
    },
    {
      i: <Icon.Tooth/>,
      t: 'Fogászat',
      sub: 'Szájüregi egészség',
      d: 'A fogkő nem csupán esztétikai kérdés. Ultrahangos fogkő-eltávolítás, fogászati röntgen és szájüregi szűrés altatásban.',
      points: ['Fogkő-eltávolítás', 'Fogászati röntgen', 'Foghúzás', 'Szájhigiéniai tanácsadás'],
      tone: 'warm',
    },
    {
      i: <Icon.Chip/>,
      t: 'Mikrochip & EU útlevél',
      sub: 'Hivatalos azonosítás',
      d: 'Hivatalosan regisztrált mikrochip-beültetés, és teljes körű kisállatútlevél-kiállítás külföldi utazáshoz.',
      points: ['ISO mikrochip beültetés', 'PetVetData regisztráció', 'EU kisállatútlevél', 'Utazási tanácsadás'],
      tone: 'ink',
    },
  ];
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container-wide">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {services.map((s, i) => <ServiceRow key={i} s={s} reverse={i % 2 === 1}/>)}
        </div>
      </div>
    </section>
  );
}

function ServiceRow({ s, reverse }) {
  const photoClass = s.tone === 'ink' ? 'photo-ink' : s.tone === 'warm' ? 'photo-warm' : 'photo-moss';
  return (
    <div style={{
      background: '#fff', border: '1px solid var(--stone)', borderRadius: 24,
      padding: 16,
      display: 'grid', gridTemplateColumns: reverse ? '1fr 1.1fr' : '1.1fr 1fr',
      gap: 16, alignItems: 'stretch',
    }}>
      <div style={{ padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', order: reverse ? 2 : 1 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: 'var(--moss-tint)', color: 'var(--moss-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {s.i}
            </div>
            <div className="eyebrow">{s.sub}</div>
          </div>
          <h3 className="display" style={{ fontSize: 40, letterSpacing: '-0.03em' }}>{s.t}</h3>
          <p style={{ fontSize: 16, color: 'var(--ink-3)', marginTop: 16, lineHeight: 1.6, maxWidth: 480 }}>{s.d}</p>
          <ul style={{ listStyle: 'none', marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {s.points.map((p, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink-2)' }}>
                <div style={{ width: 18, height: 18, borderRadius: 999, background: 'var(--paper-2)', color: 'var(--moss)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon.Check s={11}/>
                </div>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ marginTop: 32, display: 'flex', gap: 8 }}>
          <button className="btn btn-secondary" style={{ padding: '14px 18px', fontSize: 14 }}>Részletes leírás</button>
          <button className="btn btn-ghost btn-arrow" style={{ padding: '14px 18px', fontSize: 14, color: 'var(--moss)' }}>Időpontot kérek</button>
        </div>
      </div>
      <div className={`photo ${photoClass} photo-dark`} style={{ borderRadius: 16, minHeight: 380, order: reverse ? 1 : 2 }}>
        <span className="photo-label">[ photo · {s.t.toLowerCase()} in action ]</span>
      </div>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(0);
  const items = [
    { q: 'Hogyan tudok időpontot foglalni?',
      a: 'Online időpontfoglaló rendszerünkön keresztül a legegyszerűbb (24/7), de telefonon is fogadjuk a foglalásokat hétköznap 8 és 19 óra között. Visszaigazolást SMS-ben és e-mailben küldünk.' },
    { q: 'Mennyibe kerül egy általános vizsgálat?',
      a: 'Egy általános állapotfelmérés ára 9 500 Ft-tól indul, a beavatkozások és vizsgálatok díjszabását részletesen az árlistánkban közöljük, illetve telefonon szívesen tájékoztatjuk.' },
    { q: 'Fogadják a TAEG/biztosítási kártyákat?',
      a: 'Több hazai kisállat-egészségbiztosítóval is együttműködünk (Genertel, Allianz, Európai Utazási). Időpontfoglaláskor jelezze a biztosítóját, és előkészítjük a szükséges dokumentumokat.' },
    { q: 'Mit hozzak az első alkalommal?',
      a: 'Hozza magával az oltási könyvet (ha van), a korábbi leleteket, és kedvencének kedvenc takaróját vagy játékát — ez sokat segít a stressz csökkentésében.' },
    { q: 'Sürgős esetben mit tegyek?',
      a: 'Hívjon azonnal: +36 30 911 24 24. Nyitvatartási időn kívül is elérhetők vagyunk a legsúlyosabb esetekben. A telefonon adott útmutatás már az érkezés előtt segíthet.' },
  ];
  return (
    <section style={{ padding: '100px 0', background: 'var(--bone)' }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'flex-start' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Gyakori kérdések</div>
            <h2 className="display" style={{ fontSize: 44, letterSpacing: '-0.03em' }}>
              Amit a legtöbben kérdeznek.
            </h2>
            <p style={{ fontSize: 15, color: 'var(--ink-3)', marginTop: 18, lineHeight: 1.6 }}>
              Nem találja a választ? Hívjon, vagy írjon bátran — szívesen segítünk.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {items.map((it, i) => (
              <div key={i} style={{ borderTop: '1px solid var(--stone)' }}>
                <button onClick={()=>setOpen(open === i ? -1 : i)}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '24px 0',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24,
                    fontFamily: 'var(--display)', fontSize: 22, letterSpacing: '-0.02em', fontWeight: 500,
                  }}>
                  {it.q}
                  <div style={{ width: 36, height: 36, borderRadius: 999, background: open === i ? 'var(--ink)' : 'var(--paper-2)', color: open === i ? 'var(--bone)' : 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {open === i ? <Icon.Minus s={16}/> : <Icon.Plus s={16}/>}
                  </div>
                </button>
                {open === i && (
                  <div style={{ paddingBottom: 24, fontSize: 16, lineHeight: 1.65, color: 'var(--ink-3)', maxWidth: 640 }}>
                    {it.a}
                  </div>
                )}
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--stone)' }}/>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingCTA({ onNav }) {
  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container-wide">
        <div style={{
          background: 'var(--moss)', color: 'var(--bone)',
          borderRadius: 28, padding: '72px 56px',
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, alignItems: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', left: -60, bottom: -60, width: 280, height: 280, borderRadius: '50%', border: '1px solid rgba(244,239,230,0.15)' }}/>
          <div style={{ position: 'absolute', left: 40, bottom: 40, width: 180, height: 180, borderRadius: '50%', border: '1px solid rgba(244,239,230,0.15)' }}/>
          <div style={{ position: 'relative' }}>
            <h2 className="display" style={{ fontSize: 48, letterSpacing: '-0.03em' }}>
              Foglaljon időpontot ma — vizsgálat akár holnap.
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(244,239,230,0.8)', marginTop: 18, maxWidth: 480, lineHeight: 1.55 }}>
              Egyszerű, gyors online foglalás. Visszaigazolást SMS-ben és e-mailben küldünk.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, position: 'relative' }}>
            <button onClick={()=>onNav('contact')} className="btn" style={{ background: 'var(--bone)', color: 'var(--ink)', padding: '20px 26px', fontSize: 15 }}>
              <Icon.Calendar s={16}/> Időpontfoglalás
            </button>
            <a href="tel:+3652123456" className="btn" style={{ background: 'transparent', color: 'var(--bone)', border: '1px solid rgba(244,239,230,0.3)', padding: '20px 26px', fontSize: 15 }}>
              <Icon.Phone s={16}/> +36 52 123 456
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.ServicesPage = ServicesPage;
