/* Homepage — desktop layout */
/* global React, Icon */

function HomePage({ onNav }) {
  return (
    <div style={{ background: 'var(--paper)' }}>
      <Nav active="home" onNav={onNav} />
      <Hero onNav={onNav}/>
      <TrustStrip />
      <ServicesOverview onNav={onNav} />
      <MeetVets onNav={onNav}/>
      <ClinicEnv />
      <Reviews />
      <EmergencyBanner onNav={onNav}/>
      <ContactPreview onNav={onNav}/>
      <Footer onNav={onNav}/>
      <StickyBookCTA onNav={onNav}/>
    </div>
  );
}

// ============= HERO =============
function Hero({ onNav }) {
  return (
    <section style={{ padding: '40px 0 0' }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 48, alignItems: 'stretch' }}>
          {/* Left text */}
          <div style={{ paddingTop: 60, paddingBottom: 60, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="chip" style={{ marginBottom: 28 }}>
                <span className="chip-dot"/>
                Új páciensek várólista nélkül
              </div>
              <h1 className="display" style={{ fontSize: 88, lineHeight: 0.98, letterSpacing: '-0.035em' }}>
                Modern állatorvoslás <em style={{ fontStyle: 'italic', color: 'var(--moss)', fontWeight: 400 }}>nyugodt</em> környezetben.
              </h1>
              <p style={{ marginTop: 28, fontSize: 19, lineHeight: 1.55, color: 'var(--ink-3)', maxWidth: 520 }}>
                Debrecen legújabb kisállat-rendelőjében nagy szakértelemmel és barátságos hozzáállással gondoskodunk kedvencéről. A vizsgálótól a műtőig, minden lépés stresszmentes.
              </p>
            </div>
            <div style={{ marginTop: 48 }}>
              <div style={{ display: 'flex', gap: 12, marginBottom: 28 }}>
                <button className="btn btn-primary" style={{ padding: '18px 26px', fontSize: 15 }} onClick={()=>onNav('contact')}>
                  <Icon.Calendar s={16}/> Időpontfoglalás
                </button>
                <button className="btn btn-secondary" style={{ padding: '18px 26px', fontSize: 15 }} onClick={()=>onNav('contact')}>
                  Kapcsolat
                </button>
              </div>
              <div style={{ display: 'flex', gap: 36, alignItems: 'center', borderTop: '1px solid var(--stone)', paddingTop: 24 }}>
                <Stat value="12+" label="év szakmai tapasztalat" />
                <div style={{ width: 1, height: 32, background: 'var(--stone)' }}/>
                <Stat value="1 200+" label="rendszeres páciens" />
                <div style={{ width: 1, height: 32, background: 'var(--stone)' }}/>
                <Stat value="4,9" label="Google értékelés" star />
              </div>
            </div>
          </div>
          {/* Right photo */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="photo photo-warm photo-dark" style={{ flex: 1, minHeight: 560, borderRadius: 24 }}>
              <span className="photo-label">[ photo · vet examining golden retriever, natural light ]</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div className="photo photo-moss photo-dark" style={{ height: 130, borderRadius: 16 }}>
                <span className="photo-label">[ clinic interior ]</span>
              </div>
              <div style={{ background: 'var(--ink)', color: 'var(--bone)', borderRadius: 16, padding: 22, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="eyebrow" style={{ color: 'var(--moss-soft)' }}>Ma is fogadunk</div>
                <div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: 22, letterSpacing: '-0.02em' }}>3 szabad időpont</div>
                  <div style={{ fontSize: 13, color: 'rgba(244,239,230,0.6)', marginTop: 4 }}>14:30 · 16:00 · 17:30</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label, star }) {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontFamily: 'var(--display)', fontSize: 32, letterSpacing: '-0.02em', fontWeight: 500 }}>{value}</span>
        {star && <Icon.Star s={16}/>}
      </div>
      <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{label}</div>
    </div>
  );
}

// ============= TRUST STRIP =============
function TrustStrip() {
  const items = [
    { i: <Icon.Stetho/>, t: 'Tapasztalt orvosok', d: 'Két szakorvos, 20+ év együttes gyakorlattal.' },
    { i: <Icon.Scan/>,   t: 'Modern eszközpark', d: 'Digitális röntgen, ultrahang, in-house labor.' },
    { i: <Icon.Heart/>,  t: 'Barátságos ellátás', d: 'Stresszmentes vizsgálat, türelmes hozzáállás.' },
    { i: <Icon.Calendar/>, t: 'Gyors időpont',    d: 'Általában 24–48 órán belül fogadjuk.' },
  ];
  return (
    <section style={{ padding: '80px 0' }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, borderTop: '1px solid var(--stone)', borderBottom: '1px solid var(--stone)' }}>
          {items.map((it, i) => (
            <div key={i} style={{ padding: '32px 28px', borderRight: i < 3 ? '1px solid var(--stone)' : 'none' }}>
              <div style={{ width: 44, height: 44, borderRadius: 999, background: 'var(--moss-tint)', color: 'var(--moss-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                {it.i}
              </div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 20, letterSpacing: '-0.02em', fontWeight: 500 }}>{it.t}</div>
              <div style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 6, lineHeight: 1.55 }}>{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= SERVICES OVERVIEW =============
function ServicesOverview({ onNav }) {
  const services = [
    { i: <Icon.Stetho/>, t: 'Általános vizsgálat', d: 'Éves szűrés, általános állapotfelmérés, prevenció.' },
    { i: <Icon.Syringe/>,t: 'Védőoltások',          d: 'Egyéni oltási rend, az összes alap- és kiegészítő oltás.' },
    { i: <Icon.Scan/>,   t: 'Diagnosztika',         d: 'Digitális röntgen, ultrahang és vérvizsgálatok helyben.' },
    { i: <Icon.Scalpel/>,t: 'Sebészet',             d: 'Tervezett és sürgősségi műtétek modern műtőben.' },
    { i: <Icon.Tooth/>,  t: 'Fogászat',             d: 'Szájüregi szűrés, ultrahangos fogkő-eltávolítás.' },
    { i: <Icon.Chip/>,   t: 'Mikrochip & útlevél',  d: 'Hivatalos chip-beültetés, EU kisállatútlevél.' },
  ];
  return (
    <section style={{ padding: '40px 0 100px' }}>
      <div className="container-wide">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48 }}>
          <div style={{ maxWidth: 640 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Szolgáltatásaink</div>
            <h2 className="display" style={{ fontSize: 56, letterSpacing: '-0.03em' }}>
              Mindent, ami egy kisállat egészségéhez kell — egy helyen.
            </h2>
          </div>
          <button className="btn btn-secondary btn-arrow" onClick={()=>onNav('services')}>Összes szolgáltatás</button>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {services.map((s, i) => (
            <a href="#" key={i} onClick={(e)=>{e.preventDefault(); onNav('services');}}
              style={{
                background: '#fff', border: '1px solid var(--stone)', borderRadius: 20,
                padding: 28, minHeight: 200,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                transition: 'all .2s ease',
              }}
              onMouseEnter={(e)=>{ e.currentTarget.style.borderColor = 'var(--moss)'; e.currentTarget.style.transform='translateY(-2px)'; }}
              onMouseLeave={(e)=>{ e.currentTarget.style.borderColor = 'var(--stone)'; e.currentTarget.style.transform='translateY(0)'; }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--paper)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--moss)' }}>
                  {s.i}
                </div>
                <Icon.Arrow s={18}/>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--display)', fontSize: 24, letterSpacing: '-0.02em', fontWeight: 500 }}>{s.t}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 6, lineHeight: 1.55 }}>{s.d}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= MEET VETS =============
function MeetVets({ onNav }) {
  return (
    <section style={{ padding: '100px 0', background: 'var(--bone)' }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Állatorvosaink</div>
            <h2 className="display" style={{ fontSize: 52, letterSpacing: '-0.03em' }}>
              Ismerje meg azokat, akik gondoskodnak kedvencéről.
            </h2>
            <p style={{ fontSize: 17, color: 'var(--ink-3)', marginTop: 24, lineHeight: 1.6, maxWidth: 480 }}>
              Két alapító állatorvos, közös elkötelezettséggel: szakmai precizitás, őszinte kommunikáció, és türelem minden páciens iránt.
            </p>
            <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <Credential text="Magyar Állatorvosi Kamara tag (2009 óta)"/>
              <Credential text="Sebészeti és belgyógyászati szakirányú képzés"/>
              <Credential text="Folyamatos szakmai továbbképzés (Bécs, Budapest)"/>
            </div>
            <button className="btn btn-secondary btn-arrow" style={{ marginTop: 36 }} onClick={()=>onNav('doctors')}>Bemutatkozás</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <DoctorCard
              name="Dr. Szűcs Zsolt Tamás"
              role="Alapító · Sebészet"
              years="14"
              tone="ink"
            />
            <DoctorCard
              name="Dr. Győrfi László"
              role="Alapító · Belgyógyászat"
              years="11"
              tone="moss"
              offset
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Credential({ text }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15, color: 'var(--ink-2)' }}>
      <div style={{ width: 22, height: 22, borderRadius: 999, background: 'var(--moss)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon.Check s={13}/>
      </div>
      {text}
    </div>
  );
}

function DoctorCard({ name, role, years, tone = 'ink', offset = false }) {
  const photoClass = tone === 'ink' ? 'photo-ink photo-dark' : 'photo-moss photo-dark';
  return (
    <div style={{ marginTop: offset ? 40 : 0 }}>
      <div className={`photo ${photoClass}`} style={{ aspectRatio: '3/4', borderRadius: 20 }}>
        <span className="photo-label">[ portrait · {name.split(' ')[1]} ]</span>
      </div>
      <div style={{ marginTop: 18 }}>
        <div style={{ fontFamily: 'var(--display)', fontSize: 22, letterSpacing: '-0.02em', fontWeight: 500 }}>{name}</div>
        <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 4 }}>{role}</div>
        <div style={{ marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 600, color: 'var(--moss-deep)', background: 'var(--moss-tint)', padding: '5px 10px', borderRadius: 999 }}>
          {years} év tapasztalat
        </div>
      </div>
    </div>
  );
}

// ============= CLINIC ENV =============
function ClinicEnv() {
  return (
    <section style={{ padding: '100px 0' }}>
      <div className="container-wide">
        <div style={{ marginBottom: 48, maxWidth: 720 }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>A rendelő</div>
          <h2 className="display" style={{ fontSize: 52, letterSpacing: '-0.03em' }}>
            Egy hely, ahol kedvence is otthon érzi magát.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-3)', marginTop: 20, lineHeight: 1.6 }}>
            Külön váró kutyáknak és macskáknak, természetes fény, csendes vizsgálók — mindent úgy terveztünk, hogy a stressz a minimumra csökkenjen.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '300px 240px', gap: 16 }}>
          <div className="photo photo-warm photo-dark" style={{ gridRow: '1 / 3', borderRadius: 24 }}>
            <span className="photo-label">[ reception · oak counter, plants, soft daylight ]</span>
          </div>
          <div className="photo photo-moss photo-dark" style={{ borderRadius: 20 }}>
            <span className="photo-label">[ exam room ]</span>
          </div>
          <div className="photo photo-ink photo-dark" style={{ borderRadius: 20 }}>
            <span className="photo-label">[ surgery suite ]</span>
          </div>
          <div className="photo photo-warm photo-dark" style={{ borderRadius: 20 }}>
            <span className="photo-label">[ cat-only waiting nook ]</span>
          </div>
          <div style={{ background: 'var(--ink)', color: 'var(--bone)', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Icon.Pin s={20}/>
            <div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 22, letterSpacing: '-0.02em' }}>Bartók Béla út 47.</div>
              <div style={{ fontSize: 13, color: 'rgba(244,239,230,0.6)', marginTop: 4 }}>4032 Debrecen · ingyenes parkolás</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============= REVIEWS =============
function Reviews() {
  const reviews = [
    { name: 'Kovács Eszter', pet: 'Bori · 6 éves macska', text: 'Nyugodt, türelmes orvosok. Bori először nem stresszelt egy rendelőben. Mindent érthetően elmagyaráztak, semmit nem éreztem fölöslegesnek.', stars: 5 },
    { name: 'Nagy Tamás',    pet: 'Roki · golden retriever', text: 'Sürgős eset volt este, fél órán belül fogadtak minket. A diagnózis pontos volt, Roki két nap alatt rendbejött. Ajánlom mindenkinek.', stars: 5 },
    { name: 'Horváth Zsófia',pet: 'Mogyi · tacskó', text: 'Modern eszközök, tiszta rendelő, kedves személyzet. Az online időpontfoglalás is végre tényleg működik. Itt maradunk.', stars: 5 },
  ];
  return (
    <section style={{ padding: '100px 0', background: 'var(--bone)' }}>
      <div className="container-wide">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Vélemények</div>
            <h2 className="display" style={{ fontSize: 52, letterSpacing: '-0.03em' }}>Amit a gazdik mondanak.</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', gap: 2, color: 'var(--moss)' }}>
              {[1,2,3,4,5].map(i => <Icon.Star key={i} s={16}/>)}
            </div>
            <div style={{ fontSize: 14 }}>
              <strong style={{ fontFamily: 'var(--display)', fontWeight: 600 }}>4,9</strong>
              <span style={{ color: 'var(--ink-3)' }}> · 287 Google értékelés</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid var(--stone)', borderRadius: 20, padding: 28, display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', gap: 2, color: 'var(--moss)' }}>
                {Array(r.stars).fill(0).map((_, j) => <Icon.Star key={j} s={14}/>)}
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)', flex: 1 }}>"{r.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 16, borderTop: '1px solid var(--stone)' }}>
                <div style={{ width: 38, height: 38, borderRadius: 999, background: 'var(--paper-2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--display)', fontWeight: 500, fontSize: 14 }}>
                  {r.name.split(' ').map(n=>n[0]).join('')}
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{r.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{r.pet}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============= EMERGENCY BANNER =============
function EmergencyBanner({ onNav }) {
  return (
    <section style={{ padding: '60px 0' }}>
      <div className="container-wide">
        <div style={{
          background: 'var(--ink)', color: 'var(--bone)',
          borderRadius: 28, padding: '56px 56px',
          display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', right: -80, top: -80, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,85,46,0.18), transparent 70%)' }}/>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px', borderRadius: 999, background: 'rgba(184,85,46,0.18)', color: '#E8A480', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 24 }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: '#C4633A', boxShadow: '0 0 0 4px rgba(196,99,58,0.25)' }}/>
              Sürgősségi ellátás
            </div>
            <h2 className="display" style={{ fontSize: 44, letterSpacing: '-0.03em', maxWidth: 540 }}>
              Sürgős eset? Hívjon, és azonnal elindulunk.
            </h2>
            <p style={{ fontSize: 16, color: 'rgba(244,239,230,0.7)', marginTop: 18, maxWidth: 480, lineHeight: 1.55 }}>
              Munkaidőn kívül is rendelkezésre állunk a legsúlyosabb esetekben. Kérjük, mindig hívja telefonon a rendelőt érkezés előtt.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'relative' }}>
            <a href="tel:+3652123456" style={{
              background: 'var(--clay)', color: '#fff',
              padding: '24px 28px', borderRadius: 20,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
            }}>
              <div>
                <div style={{ fontSize: 12, opacity: 0.8, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Sürgősségi vonal</div>
                <div style={{ fontFamily: 'var(--display)', fontSize: 28, letterSpacing: '-0.02em', marginTop: 4 }}>+36 30 911 24 24</div>
              </div>
              <div style={{ width: 48, height: 48, borderRadius: 999, background: 'rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon.Phone/>
              </div>
            </a>
            <button onClick={()=>onNav('emergency')} style={{
              background: 'rgba(255,255,255,0.06)', color: 'var(--bone)',
              padding: '20px 24px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
              fontSize: 15, fontWeight: 500,
            }}>
              <span>Mit tegyek érkezés előtt?</span>
              <Icon.Arrow s={18}/>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============= CONTACT PREVIEW =============
function ContactPreview({ onNav }) {
  return (
    <section style={{ padding: '60px 0 100px' }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ background: 'var(--moss-tint)', borderRadius: 24, padding: 48, position: 'relative', overflow: 'hidden' }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Időpontfoglalás</div>
            <h3 className="display" style={{ fontSize: 40, letterSpacing: '-0.03em', maxWidth: 360 }}>
              Foglaljon időpontot — két perc alatt.
            </h3>
            <p style={{ fontSize: 16, color: 'var(--ink-2)', marginTop: 16, maxWidth: 380, lineHeight: 1.55 }}>
              Online időpontfoglaló rendszerünk segít megtalálni a legjobb idősávot. Visszaigazolás SMS-ben és e-mailben.
            </p>
            <button className="btn btn-primary btn-arrow" style={{ marginTop: 32, padding: '18px 24px' }} onClick={()=>onNav('contact')}>
              Foglalok időpontot
            </button>
            <div style={{ position: 'absolute', right: -40, bottom: -40, width: 220, height: 220, borderRadius: '50%', border: '1px solid rgba(92,122,102,0.3)' }}/>
            <div style={{ position: 'absolute', right: 20, bottom: 20, width: 140, height: 140, borderRadius: '50%', border: '1px solid rgba(92,122,102,0.3)' }}/>
          </div>
          <div style={{ background: 'var(--bone)', borderRadius: 24, padding: 48 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Nyitvatartás</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { d: 'Hétfő – Péntek', h: '08:00 – 19:00' },
                { d: 'Szombat',         h: '09:00 – 14:00' },
                { d: 'Vasárnap',        h: 'zárva (sürgősségi)' },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingBottom: 12, borderBottom: i < 2 ? '1px solid var(--stone)' : 'none' }}>
                  <div style={{ fontSize: 16 }}>{r.d}</div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: 18, letterSpacing: '-0.01em', fontWeight: 500 }}>{r.h}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, padding: 20, background: '#fff', borderRadius: 16, display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 38, height: 38, borderRadius: 999, background: 'var(--moss-tint)', color: 'var(--moss-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon.Pin s={16}/>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14 }}>Bartók Béla út 47.</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>4032 Debrecen</div>
              </div>
              <button onClick={()=>onNav('contact')} style={{ fontSize: 13, fontWeight: 600, color: 'var(--moss)' }}>
                Útvonal →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.HomePage = HomePage;
