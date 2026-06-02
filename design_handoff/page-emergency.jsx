/* Emergency page */
/* global React, Icon */

function EmergencyPage({ onNav }) {
  return (
    <div style={{ background: 'var(--paper)' }}>
      <Nav active="emergency" onNav={onNav}/>
      <EmergencyHero/>
      <EmergencyChecklist/>
      <BeforeArrival/>
      <EmergencyContact/>
      <Footer onNav={onNav}/>
    </div>
  );
}

function EmergencyHero() {
  return (
    <section style={{ padding: '60px 0 40px', background: 'var(--ink)', color: 'var(--bone)' }}>
      <div className="container-wide">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '8px 14px', borderRadius: 999, background: 'rgba(184,85,46,0.18)', color: '#E8A480', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 28 }}>
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#C4633A', boxShadow: '0 0 0 4px rgba(196,99,58,0.25)', animation: 'pulse 2s infinite' }}/>
          Sürgősségi ellátás
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'flex-end' }}>
          <h1 className="display" style={{ fontSize: 88, letterSpacing: '-0.035em' }}>
            Sürgős eset?<br/>
            <span style={{ color: '#E8A480' }}>Hívjon azonnal.</span>
          </h1>
          <div>
            <a href="tel:+36309112424" style={{
              display: 'block', background: 'var(--clay)', color: '#fff',
              padding: '28px 32px', borderRadius: 24,
              marginBottom: 14,
            }}>
              <div style={{ fontSize: 12, opacity: 0.85, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>24/7 sürgősségi vonal</div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 40, letterSpacing: '-0.02em', marginTop: 8, lineHeight: 1 }}>+36 30 911 24 24</div>
              <div style={{ fontSize: 13, opacity: 0.85, marginTop: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon.Phone s={14}/> Hívás indítása →
              </div>
            </a>
            <p style={{ fontSize: 14, color: 'rgba(244,239,230,0.6)', lineHeight: 1.55 }}>
              Munkaidőn kívül kérjük, hívja a sürgősségi vonalat. Az ügyeletes orvos a hívás után 5 percen belül visszahív.
            </p>
          </div>
        </div>
      </div>
      <style>{`@keyframes pulse { 0%,100% { box-shadow: 0 0 0 4px rgba(196,99,58,0.25); } 50% { box-shadow: 0 0 0 10px rgba(196,99,58,0.05); } }`}</style>
    </section>
  );
}

function EmergencyChecklist() {
  const items = [
    { t: 'Légzési nehézség',           d: 'Lihegés nyugalomban, kék nyelv vagy ínyek, fulladás jelei.' },
    { t: 'Súlyos vérzés',                d: 'Megállíthatatlan vérzés bárhonnan, 5 percnél tovább.' },
    { t: 'Eszméletvesztés vagy görcs',  d: 'Bármilyen tartós (1 percen túli) görcsroham, ájulás.' },
    { t: 'Mérgezés gyanúja',             d: 'Csokoládé, gyógyszer, növény, sósav, fagyálló — bármi nem ehető.' },
    { t: 'Trauma, baleset',              d: 'Autóbaleset, leesés, harapás — akkor is, ha kívülről nem látszik sérülés.' },
    { t: 'Hányás vagy hasmenés vérrel', d: '24 órán belüli ismétlődő, vért tartalmazó tünetek.' },
    { t: 'Felfúvódás',                   d: 'Hirtelen kemény, megnagyobbodott has, sikertelen hányási kísérlet.' },
    { t: 'Hőguta',                        d: 'Erős zihálás, túlmelegedés, gyengeség nyári melegben.' },
  ];
  return (
    <section style={{ padding: '100px 0' }}>
      <div className="container-wide">
        <div style={{ maxWidth: 720, marginBottom: 48 }}>
          <div className="eyebrow" style={{ marginBottom: 18 }}>Mi számít sürgős esetnek?</div>
          <h2 className="display" style={{ fontSize: 52, letterSpacing: '-0.03em' }}>
            Ha a kedvence ezek bármelyikét mutatja — ne várjon.
          </h2>
          <p style={{ fontSize: 16, color: 'var(--ink-3)', marginTop: 18, lineHeight: 1.6 }}>
            Sok esetben minden perc számít. Ha bizonytalan, hívjon — telefonon segítünk eldönteni, hogy szükséges-e a beavatkozás.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {items.map((it, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid var(--stone)', borderRadius: 16, padding: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(184,85,46,0.12)', color: 'var(--clay)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon.Plus s={18}/>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--display)', fontSize: 18, letterSpacing: '-0.015em', fontWeight: 500 }}>{it.t}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 5, lineHeight: 1.5 }}>{it.d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeArrival() {
  const steps = [
    { n: '01', t: 'Hívjon minket telefonon',     d: 'Ne induljon el szótlanul. A telefonos konzultációval az orvos már az érkezés előtt felkészül a fogadásra.' },
    { n: '02', t: 'Maradjon nyugodt',             d: 'A kedvence érzi a stresszt. Beszéljen vele csendesen, kerülje a hirtelen mozdulatokat.' },
    { n: '03', t: 'Tartsa melegen, nyugodtan',    d: 'Borítsa be törülközővel vagy takaróval. Sérülés esetén minimalizálja a mozgatást.' },
    { n: '04', t: 'Hozzon mindent magával',       d: 'Oltási könyv, gyógyszerlista, korábbi leletek — minden segít a gyors diagnózisban.' },
  ];
  return (
    <section style={{ padding: '100px 0', background: 'var(--bone)' }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'flex-start' }}>
          <div style={{ position: 'sticky', top: 100 }}>
            <div className="eyebrow" style={{ marginBottom: 18 }}>Érkezés előtt</div>
            <h2 className="display" style={{ fontSize: 44, letterSpacing: '-0.03em' }}>Mit tegyen, mielőtt elindul?</h2>
            <p style={{ fontSize: 15, color: 'var(--ink-3)', marginTop: 18, lineHeight: 1.6 }}>
              Négy egyszerű lépés, ami sokat segíthet — Önnek és a kedvencének is.
            </p>
            <a href="tel:+36309112424" className="btn btn-emergency" style={{ marginTop: 28, padding: '18px 24px' }}>
              <Icon.Phone s={16}/> Sürgősségi vonal
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {steps.map((s, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 28, padding: '32px 0', borderTop: '1px solid var(--stone)' }}>
                <div style={{ fontFamily: 'var(--display)', fontSize: 28, color: 'var(--moss)', fontWeight: 500, letterSpacing: '-0.02em' }}>{s.n}</div>
                <div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: 28, letterSpacing: '-0.02em', fontWeight: 500 }}>{s.t}</div>
                  <div style={{ fontSize: 16, color: 'var(--ink-3)', marginTop: 8, lineHeight: 1.6 }}>{s.d}</div>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--stone)' }}/>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmergencyContact() {
  return (
    <section style={{ padding: '100px 0' }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ background: 'var(--clay)', color: '#fff', borderRadius: 24, padding: 48, position: 'relative', overflow: 'hidden' }}>
            <Icon.Siren s={32}/>
            <h3 className="display" style={{ fontSize: 36, letterSpacing: '-0.03em', marginTop: 28 }}>Munkaidőn kívül</h3>
            <p style={{ fontSize: 15, opacity: 0.9, marginTop: 14, lineHeight: 1.6, maxWidth: 360 }}>
              Hétköznap 19:00 után, hétvégén és ünnepnapokon a sürgősségi vonalat hívja. Az ügyeletes orvos visszahív.
            </p>
            <a href="tel:+36309112424" style={{ marginTop: 32, display: 'inline-flex', alignItems: 'center', gap: 12, fontFamily: 'var(--display)', fontSize: 26, letterSpacing: '-0.02em' }}>
              <Icon.Phone s={20}/> +36 30 911 24 24
            </a>
          </div>
          <div style={{ background: 'var(--ink)', color: 'var(--bone)', borderRadius: 24, padding: 48 }}>
            <Icon.Clock s={32}/>
            <h3 className="display" style={{ fontSize: 36, letterSpacing: '-0.03em', marginTop: 28 }}>Nyitvatartás</h3>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { d: 'Hétfő – Péntek', h: '08:00 – 19:00' },
                { d: 'Szombat',         h: '09:00 – 14:00' },
                { d: 'Vasárnap',        h: 'Csak sürgősségi' },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 14, borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                  <div style={{ fontSize: 15, color: 'rgba(244,239,230,0.7)' }}>{r.d}</div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: 17, letterSpacing: '-0.01em' }}>{r.h}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.EmergencyPage = EmergencyPage;
