/* Mobile homepage — single condensed mockup */
/* global React, Icon */

function MobileHome({ onNav }) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div style={{ background: 'var(--paper)', minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <MobileNav active="home" onNav={onNav || (()=>{})} open={navOpen} setOpen={setNavOpen}/>
      <div style={{ flex: 1 }}>
        <MHero/>
        <MTrust/>
        <MServices/>
        <MVets/>
        <MEmergency/>
        <MReviews/>
        <MContact/>
        <div style={{ background: 'var(--ink)', color: 'var(--bone)', padding: '40px 20px', textAlign: 'center' }}>
          <Logo inverse/>
          <p style={{ fontSize: 13, color: 'rgba(244,239,230,0.55)', marginTop: 18 }}>
            © 2026 Bartók Állatorvosi Rendelő
          </p>
        </div>
      </div>
      <MobileStickyCTA onNav={onNav || (()=>{})}/>
    </div>
  );
}

function MHero() {
  return (
    <section style={{ padding: '24px 20px 32px' }}>
      <div className="chip" style={{ marginBottom: 18 }}>
        <span className="chip-dot"/> Új páciensek várólista nélkül
      </div>
      <h1 className="display" style={{ fontSize: 42, lineHeight: 1, letterSpacing: '-0.03em' }}>
        Modern állatorvoslás <em style={{ fontStyle: 'italic', color: 'var(--moss)', fontWeight: 400 }}>nyugodt</em> környezetben.
      </h1>
      <p style={{ marginTop: 18, fontSize: 15, color: 'var(--ink-3)', lineHeight: 1.55 }}>
        Debrecen legújabb kisállat-rendelőjében nagy szakértelemmel és barátságos hozzáállással gondoskodunk kedvencéről.
      </p>
      <div className="photo photo-warm photo-dark" style={{ marginTop: 24, height: 280, borderRadius: 18 }}>
        <span className="photo-label">[ photo · vet & dog ]</span>
      </div>
      <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <button className="btn btn-primary" style={{ padding: '16px', fontSize: 14 }}>
          <Icon.Calendar s={14}/> Időpont
        </button>
        <button className="btn btn-secondary" style={{ padding: '16px', fontSize: 14 }}>Kapcsolat</button>
      </div>
    </section>
  );
}

function MTrust() {
  const items = [
    { i: <Icon.Stetho s={16}/>, t: 'Tapasztalt orvosok' },
    { i: <Icon.Scan s={16}/>,   t: 'Modern eszközpark' },
    { i: <Icon.Heart s={16}/>,  t: 'Barátságos ellátás' },
    { i: <Icon.Calendar s={16}/>, t: 'Gyors időpont' },
  ];
  return (
    <section style={{ padding: '8px 20px 32px' }}>
      <div style={{ background: '#fff', border: '1px solid var(--stone)', borderRadius: 18, padding: 6, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
        {items.map((it, i) => (
          <div key={i} style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 10, borderBottom: i < 2 ? '1px solid var(--stone)' : 'none', borderRight: i % 2 === 0 ? '1px solid var(--stone)' : 'none' }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--moss-tint)', color: 'var(--moss-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {it.i}
            </div>
            <div style={{ fontSize: 13, fontWeight: 500 }}>{it.t}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MServices() {
  const services = [
    { i: <Icon.Stetho s={18}/>, t: 'Általános vizsgálat' },
    { i: <Icon.Syringe s={18}/>,t: 'Védőoltások' },
    { i: <Icon.Scan s={18}/>,   t: 'Diagnosztika' },
    { i: <Icon.Scalpel s={18}/>,t: 'Sebészet' },
    { i: <Icon.Tooth s={18}/>,  t: 'Fogászat' },
    { i: <Icon.Chip s={18}/>,   t: 'Mikrochip' },
  ];
  return (
    <section style={{ padding: '32px 20px' }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>Szolgáltatások</div>
      <h2 className="display" style={{ fontSize: 32, letterSpacing: '-0.03em' }}>Mindent, ami egy kisállat egészségéhez kell.</h2>
      <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {services.map((s, i) => (
          <div key={i} style={{ background: '#fff', border: '1px solid var(--stone)', borderRadius: 14, padding: 16, minHeight: 90, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--paper)', color: 'var(--moss)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {s.i}
            </div>
            <div style={{ fontFamily: 'var(--display)', fontSize: 15, letterSpacing: '-0.015em', fontWeight: 500 }}>{s.t}</div>
          </div>
        ))}
      </div>
      <button className="btn btn-secondary btn-arrow" style={{ marginTop: 16, width: '100%', padding: '14px', fontSize: 14 }}>
        Összes szolgáltatás
      </button>
    </section>
  );
}

function MVets() {
  return (
    <section style={{ padding: '32px 20px', background: 'var(--bone)' }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>Állatorvosaink</div>
      <h2 className="display" style={{ fontSize: 32, letterSpacing: '-0.03em' }}>Ismerje meg azokat, akik gondoskodnak kedvencéről.</h2>
      <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <MVetCard name="Dr. Szűcs Zsolt" role="Sebészet · 14 év" tone="ink"/>
        <MVetCard name="Dr. Győrfi László" role="Belgyógyászat · 11 év" tone="moss"/>
      </div>
    </section>
  );
}

function MVetCard({ name, role, tone }) {
  return (
    <div>
      <div className={`photo ${tone === 'ink' ? 'photo-ink' : 'photo-moss'} photo-dark`} style={{ aspectRatio: '3/4', borderRadius: 14 }}>
        <span className="photo-label">[ portrait ]</span>
      </div>
      <div style={{ marginTop: 10, fontFamily: 'var(--display)', fontSize: 15, letterSpacing: '-0.015em', fontWeight: 500 }}>{name}</div>
      <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{role}</div>
    </div>
  );
}

function MEmergency() {
  return (
    <section style={{ padding: '24px 20px' }}>
      <div style={{ background: 'var(--ink)', color: 'var(--bone)', borderRadius: 20, padding: 24 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 999, background: 'rgba(184,85,46,0.18)', color: '#E8A480', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: '#C4633A' }}/> Sürgősségi
        </div>
        <h3 className="display" style={{ fontSize: 26, letterSpacing: '-0.025em' }}>Sürgős eset? Hívjon, és azonnal elindulunk.</h3>
        <a href="tel:+36309112424" style={{ marginTop: 18, background: 'var(--clay)', color: '#fff', padding: '16px 18px', borderRadius: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 11, opacity: 0.85, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>24/7 vonal</div>
            <div style={{ fontFamily: 'var(--display)', fontSize: 20, marginTop: 2 }}>+36 30 911 24 24</div>
          </div>
          <Icon.Phone s={18}/>
        </a>
      </div>
    </section>
  );
}

function MReviews() {
  return (
    <section style={{ padding: '32px 20px' }}>
      <div className="eyebrow" style={{ marginBottom: 12 }}>Vélemények</div>
      <h2 className="display" style={{ fontSize: 32, letterSpacing: '-0.03em' }}>4,9 ★ · 287 értékelés</h2>
      <div style={{ marginTop: 20, background: '#fff', border: '1px solid var(--stone)', borderRadius: 16, padding: 20 }}>
        <div style={{ display: 'flex', gap: 2, color: 'var(--moss)', marginBottom: 12 }}>
          {[1,2,3,4,5].map(i => <Icon.Star key={i} s={13}/>)}
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-2)' }}>
          "Nyugodt, türelmes orvosok. Bori először nem stresszelt egy rendelőben."
        </p>
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--stone)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: 999, background: 'var(--paper-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--display)', fontWeight: 500, fontSize: 12 }}>KE</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Kovács Eszter</div>
            <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>Bori · 6 éves macska</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MContact() {
  return (
    <section style={{ padding: '24px 20px 40px' }}>
      <div style={{ background: 'var(--bone)', borderRadius: 20, padding: 24 }}>
        <div className="eyebrow" style={{ marginBottom: 12 }}>Kapcsolat</div>
        <div style={{ fontFamily: 'var(--display)', fontSize: 22, letterSpacing: '-0.02em', fontWeight: 500 }}>Bartók Béla út 47.</div>
        <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 4 }}>4032 Debrecen · Ingyenes parkolás</div>
        <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[{d:'H–P', h:'08:00–19:00'},{d:'Szo', h:'09:00–14:00'},{d:'V', h:'zárva'}].map((r,i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, paddingBottom: 8, borderBottom: i < 2 ? '1px solid var(--stone)' : 'none' }}>
              <span style={{ color: 'var(--ink-3)' }}>{r.d}</span>
              <span style={{ fontWeight: 500 }}>{r.h}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Mobile services page
function MobileServices({ onNav }) {
  const [navOpen, setNavOpen] = useState(false);
  const cats = ['Általános', 'Védőoltások', 'Diagnosztika', 'Sebészet', 'Fogászat', 'Mikrochip'];
  const [cat, setCat] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(0);
  return (
    <div style={{ background: 'var(--paper)', display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <MobileNav active="services" onNav={onNav || (()=>{})} open={navOpen} setOpen={setNavOpen}/>
      <div style={{ flex: 1 }}>
        <section style={{ padding: '24px 20px 24px' }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Szolgáltatások</div>
          <h1 className="display" style={{ fontSize: 38, letterSpacing: '-0.03em' }}>Teljes körű ellátás — egy modern rendelőben.</h1>
        </section>
        <section style={{ padding: '8px 20px', borderTop: '1px solid var(--stone)', borderBottom: '1px solid var(--stone)' }}>
          <div style={{ display: 'flex', gap: 8, overflow: 'auto', padding: '12px 0' }} className="no-scrollbar">
            {cats.map((c, i) => (
              <button key={c} onClick={()=>setCat(i)} style={{
                flexShrink: 0, padding: '10px 16px', borderRadius: 999,
                fontSize: 13, fontWeight: 500,
                background: cat === i ? 'var(--ink)' : 'transparent',
                color: cat === i ? 'var(--bone)' : 'var(--ink-2)',
                border: cat === i ? 'none' : '1px solid var(--stone-2)',
              }}>{c}</button>
            ))}
          </div>
        </section>
        <section style={{ padding: '24px 20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { i: <Icon.Stetho/>, t: 'Általános vizsgálat', d: 'Éves szűrés, állapotfelmérés.' },
              { i: <Icon.Syringe/>, t: 'Védőoltások', d: 'Egyéni oltási rend.' },
              { i: <Icon.Scan/>, t: 'Diagnosztika', d: 'Röntgen, ultrahang, labor.' },
              { i: <Icon.Scalpel/>, t: 'Sebészet', d: 'Tervezett és sürgősségi műtétek.' },
            ].map((s, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid var(--stone)', borderRadius: 16, padding: 18, display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--moss-tint)', color: 'var(--moss-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {s.i}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: 'var(--display)', fontSize: 17, letterSpacing: '-0.02em', fontWeight: 500 }}>{s.t}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{s.d}</div>
                </div>
                <Icon.Arrow s={16}/>
              </div>
            ))}
          </div>
        </section>
        <section style={{ padding: '24px 20px', background: 'var(--bone)' }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>GYIK</div>
          {[
            { q: 'Hogyan tudok időpontot foglalni?', a: 'Online vagy telefonon, hétköznap 8–19 között.' },
            { q: 'Mennyibe kerül egy vizsgálat?', a: 'Általános vizsgálat 9 500 Ft-tól.' },
            { q: 'Mit hozzak az első alkalommal?', a: 'Oltási könyvet, korábbi leleteket, kedvenc takarót.' },
          ].map((it, i) => (
            <div key={i} style={{ borderTop: '1px solid var(--stone)' }}>
              <button onClick={()=>setOpenFAQ(openFAQ === i ? -1 : i)} style={{ width: '100%', textAlign: 'left', padding: '18px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, fontFamily: 'var(--display)', fontSize: 17, letterSpacing: '-0.02em', fontWeight: 500 }}>
                {it.q}
                <div style={{ width: 28, height: 28, borderRadius: 999, background: openFAQ === i ? 'var(--ink)' : 'var(--paper-2)', color: openFAQ === i ? 'var(--bone)' : 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {openFAQ === i ? <Icon.Minus s={13}/> : <Icon.Plus s={13}/>}
                </div>
              </button>
              {openFAQ === i && <div style={{ paddingBottom: 18, fontSize: 14, color: 'var(--ink-3)', lineHeight: 1.55 }}>{it.a}</div>}
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--stone)' }}/>
        </section>
        <div style={{ background: 'var(--ink)', color: 'var(--bone)', padding: '40px 20px', textAlign: 'center' }}>
          <Logo inverse/>
          <p style={{ fontSize: 13, color: 'rgba(244,239,230,0.55)', marginTop: 18 }}>© 2026 Bartók Állatorvosi Rendelő</p>
        </div>
      </div>
      <MobileStickyCTA onNav={onNav || (()=>{})}/>
    </div>
  );
}

// Mobile emergency page
function MobileEmergency({ onNav }) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div style={{ background: 'var(--paper)', display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
      <MobileNav active="emergency" onNav={onNav || (()=>{})} open={navOpen} setOpen={setNavOpen}/>
      <div style={{ flex: 1 }}>
        <section style={{ background: 'var(--ink)', color: 'var(--bone)', padding: '32px 20px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', borderRadius: 999, background: 'rgba(184,85,46,0.18)', color: '#E8A480', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 18 }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: '#C4633A' }}/> Sürgősségi
          </div>
          <h1 className="display" style={{ fontSize: 44, letterSpacing: '-0.03em', lineHeight: 0.98 }}>
            Sürgős eset?<br/>
            <span style={{ color: '#E8A480' }}>Hívjon azonnal.</span>
          </h1>
          <a href="tel:+36309112424" style={{ marginTop: 24, display: 'block', background: 'var(--clay)', color: '#fff', padding: '20px', borderRadius: 16 }}>
            <div style={{ fontSize: 11, opacity: 0.85, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>24/7 sürgősségi vonal</div>
            <div style={{ fontFamily: 'var(--display)', fontSize: 28, letterSpacing: '-0.02em', marginTop: 6 }}>+36 30 911 24 24</div>
          </a>
        </section>
        <section style={{ padding: '32px 20px' }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Mi számít sürgős esetnek?</div>
          <h2 className="display" style={{ fontSize: 26, letterSpacing: '-0.025em', marginBottom: 20 }}>Ha kedvence ezek bármelyikét mutatja — ne várjon.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {['Légzési nehézség', 'Súlyos vérzés', 'Görcs / ájulás', 'Mérgezés', 'Trauma', 'Felfúvódás'].map((t, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid var(--stone)', borderRadius: 12, padding: 14 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(184,85,46,0.12)', color: 'var(--clay)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                  <Icon.Plus s={14}/>
                </div>
                <div style={{ fontFamily: 'var(--display)', fontSize: 14, fontWeight: 500, letterSpacing: '-0.01em' }}>{t}</div>
              </div>
            ))}
          </div>
        </section>
        <section style={{ padding: '24px 20px', background: 'var(--bone)' }}>
          <div className="eyebrow" style={{ marginBottom: 12 }}>Érkezés előtt</div>
          {[
            { n: '01', t: 'Hívjon telefonon' },
            { n: '02', t: 'Maradjon nyugodt' },
            { n: '03', t: 'Tartsa melegen' },
            { n: '04', t: 'Hozzon dokumentumokat' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 0', borderTop: '1px solid var(--stone)' }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: 22, color: 'var(--moss)', fontWeight: 500 }}>{s.n}</div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 18, letterSpacing: '-0.02em', fontWeight: 500 }}>{s.t}</div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--stone)' }}/>
        </section>
        <div style={{ background: 'var(--ink)', color: 'var(--bone)', padding: '40px 20px', textAlign: 'center' }}>
          <Logo inverse/>
          <p style={{ fontSize: 13, color: 'rgba(244,239,230,0.55)', marginTop: 18 }}>© 2026 Bartók Állatorvosi Rendelő</p>
        </div>
      </div>
      <div style={{ position: 'sticky', bottom: 0, background: 'var(--clay)', padding: '12px 16px' }}>
        <a href="tel:+36309112424" className="btn" style={{ width: '100%', height: 52, background: '#fff', color: 'var(--clay)' }}>
          <Icon.Phone s={16}/> Sürgősségi hívás
        </a>
      </div>
    </div>
  );
}

Object.assign(window, { MobileHome, MobileServices, MobileEmergency });
