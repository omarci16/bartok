# Handoff: Bartók Állatorvosi Rendelő — Complete Website

## Overview

Full website design for a modern veterinary clinic in Debrecen, Hungary. The site covers five core pages (Homepage, Services, Veterinarians, Emergency, Contact/Booking) plus responsive mobile versions of three key pages. The tone is editorial and premium — think calm, trustworthy, warm — not the typical medical-green-on-white clinic website.

---

## About the Design Files

The files in this bundle are **HTML design prototypes** — high-fidelity references showing intended look, layout, copy, and interactive behaviour. They are **not** production-ready code to ship directly.

Your task is to **recreate these designs in your target codebase** using its established framework (Next.js, Nuxt, plain HTML/CSS, etc.), component library, and routing conventions. Treat every measurement, colour, and copy string in these files as the source of truth.

If no framework exists yet: **Next.js 14 (App Router) + Tailwind CSS** is the recommended stack, with `shadcn/ui` for accessible form primitives.

---

## Fidelity

**High-fidelity.** Every colour, spacing value, font size, border-radius, and copy string is final. Recreate pixel-precisely. The only intentional placeholder elements are the hatched photo boxes — replace those with real photography.

---

## Design Tokens

### Colors
```css
--ink:        #16181C   /* primary text, dark backgrounds */
--ink-2:      #2A2D33   /* secondary headings */
--ink-3:      #4B4F57   /* body text, labels */
--mute:       #7E8089   /* disabled, placeholder */

--bone:       #F4EFE6   /* warm off-white — section backgrounds */
--paper:      #FAF7F1   /* page background */
--paper-2:    #EFE9DD   /* cards, hover states */
--stone:      #E5E0D5   /* borders, dividers */
--stone-2:    #D4CEC0   /* strong borders */

--moss:       #5C7A66   /* PRIMARY — buttons, accents, links */
--moss-deep:  #3F5848   /* button hover */
--moss-soft:  #A8BFA9   /* dark-bg secondary text */
--moss-tint:  #DBE5DC   /* light moss backgrounds, chips */

--clay:       #B8552E   /* EMERGENCY ONLY — never decorative */
--clay-soft:  #E8C3AE   /* emergency chips */
```

### Typography
```
Display / Headings:  Inter Tight — weights 400, 500, 600
Body / UI:           Manrope    — weights 400, 500, 600, 700
Monospace / labels:  JetBrains Mono — weights 400, 500
```

Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet"/>
```

### Type Scale
| Role | Family | Size | Weight | Letter-spacing | Line-height |
|---|---|---|---|---|---|
| Hero H1 | Inter Tight | 88px | 500 | -0.035em | 0.98 |
| Page H1 | Inter Tight | 80px | 500 | -0.035em | 1.0 |
| Section H2 | Inter Tight | 52–56px | 500 | -0.03em | 1.05 |
| Card H3 | Inter Tight | 28–40px | 500 | -0.02em | 1.1 |
| Eyebrow | Manrope | 12px | 600 | 0.12em | 1 | UPPERCASE |
| Lead / Large body | Manrope | 17–19px | 400 | — | 1.6 |
| Body | Manrope | 15–16px | 400 | — | 1.55–1.65 |
| Small / Meta | Manrope | 13–14px | 500 | — | 1.5 |
| Mono label | JetBrains Mono | 10–13px | 400 | 0.06em | — |

### Spacing
Container max-widths:
- `container`: 1240px, 40px horizontal padding
- `container-wide`: 1360px, 40px horizontal padding
- `container-narrow`: 920px, 40px horizontal padding

Section vertical padding: `100px` standard · `60px` compact · `40px` tight

### Border Radii
```
sm:   6px
md:   12px
lg:   20px
xl:   28px
pill: 999px
```

### Shadows
```
Card hover:  0 8px 24px rgba(0,0,0,0.06)
CTA float:   0 18px 40px -12px rgba(22,24,28,0.35), 0 4px 10px rgba(22,24,28,0.12)
Phone chrome: 0 30px 80px -20px rgba(0,0,0,0.4)
```

---

## Pages & Screens

### 1. Kezdőlap (Homepage) — `page-home.jsx`

**Route:** `/`

**Layout:** Full-width, `var(--paper)` background. Sticky nav at top.

#### Hero Section
- 2-column grid: `1.1fr 1fr`, 48px gap, padding `40px 0 0`
- **Left col:**
  - Chip: "Új páciensek várólista nélkül" (moss tint bg, moss-deep text, 7px dot)
  - H1: 88px Inter Tight, -0.035em, `lineHeight: 0.98`
    - Text: `Modern állatorvoslás `*`nyugodt`*` környezetben.`
    - Italic word `nyugodt` in `--moss` color, fontWeight 400
  - Lead: 19px Manrope, `--ink-3`, maxWidth 520px
  - CTA row: primary "Időpontfoglalás" + secondary "Kapcsolat" buttons
  - Stats row: `12+ év` / `1 200+ páciens` / `4,9 ★` — separated by 1px `--stone` dividers
- **Right col:**
  - Large photo placeholder: `minHeight 560px`, `borderRadius 24px`, warm tone
  - Below: 2-column grid `1fr 1fr`, 16px gap, 130px height
    - Left: moss-tone photo placeholder
    - Right: dark card (`--ink` bg): "Ma is fogadunk" eyebrow + "3 szabad időpont" + times

#### Trust Strip
- 4 columns, `borderTop/Bottom: 1px solid --stone`, `borderRight` on first 3
- Each: 44px circular icon container (`--moss-tint` bg, `--moss-deep` icon), title 20px Inter Tight, body 14px
- Padding: `32px 28px`

#### Services Overview
- Eyebrow + 56px H2 (left) + secondary "Összes szolgáltatás →" button (right)
- 3×2 grid of service cards, 16px gap, `borderRadius 20px`, white bg, `--stone` border
- Card: icon top-left, arrow top-right, title 24px Inter Tight, description 14px
- Hover: `borderColor → --moss`, `translateY(-2px)`
- Services: Általános vizsgálat · Védőoltások · Diagnosztika · Sebészet · Fogászat · Mikrochip & útlevél

#### Meet Vets
- `--bone` background, `100px` vertical padding
- 2-column `1fr 1.1fr`, 80px gap
- Left: eyebrow, 52px H2, 17px lead, 3 credential checkmarks, secondary "Bemutatkozás →" button
- Right: 2-column vet card grid — portrait placeholders (aspect 3:4, radius 20px), second card offset `marginTop: 40px`

#### Clinic Environment
- Photo mosaic: `grid-template-columns: 2fr 1fr 1fr`, `grid-template-rows: 300px 240px`
- Large photo spans both rows. Small photos + 1 dark address card.

#### Reviews
- `--bone` bg, 3-column review cards
- Each card: 5 stars (`--moss`), quote text, author avatar (initials), name + pet

#### Emergency Banner
- `--ink` bg, 2-column `1.4fr 1fr`, `borderRadius 28px`, `padding 56px`
- Left: animated red pulsing dot + "Sürgősségi ellátás" tag, 44px H2, body
- Right: `--clay` phone card with number, + secondary info button
- Decorative radial gradient: `rgba(184,85,46,0.18)`

#### Contact Preview
- 2-column `1fr 1fr`, 16px gap
- Left: `--moss-tint` bg, booking CTA card with decorative circles
- Right: `--bone` bg, opening hours table + address card

---

### 2. Szolgáltatások (Services) — `page-services.jsx`

**Route:** `/szolgaltatasok`

#### Services Hero
- 2-column `1.4fr 1fr`, 80px H1, right col is 17px lead text

#### Category Pill Nav
- Horizontal scrollable row of pill buttons
- Active: `--ink` bg + `--bone` text · Inactive: transparent + `--stone-2` border

#### Service Rows (alternating layout)
- Each service: full-width card, white bg, `borderRadius 24px`, `padding 16px`
- Inner grid: `1.1fr 1fr` (even rows) or `1fr 1.1fr` (odd rows — reversed)
- Left content panel: 40px H3, 16px description, 2×2 checklist grid, CTA buttons
- Right: photo placeholder, `borderRadius 16px`, `minHeight 380px`
- 6 services total — see source for copy

#### FAQ Accordion
- `--bone` bg, 2-column `1fr 1.6fr`
- Accordion items: 22px Inter Tight question, expand/collapse with `--ink` circle toggle
- Answer: 16px body, `maxWidth 640px`

#### Booking CTA Banner
- `--moss` bg, 2-column, decorative circles bottom-left
- Bone-bg button + ghost phone button

---

### 3. Állatorvosaink (Veterinarians) — `page-doctors.jsx`

**Route:** `/allatorvosaink`

#### Per-Doctor Profile (2 doctors, second reversed)
- `position: sticky, top: 100px` portrait (aspect 4:5, radius 24px) on left
- Right: eyebrow role, 56px H2 name, 17px bio
- Specialisation pills: `--bone` bg, `borderRadius 999px`
- Pull-quote: `--bone` bg card, 24px italic Inter Tight, large `"` in `--moss`
- Credentials: 2×2 grid of checkmark items
- CTA: primary "Időpontot kérek" + secondary "Üzenet küldése"

#### Values Section
- 4-column grid of value cards
- Each: 44×44 `--moss-tint` icon box, 22px title, 14px description

---

### 4. Sürgősség (Emergency) — `page-emergency.jsx`

**Route:** `/surgossegi`

#### Hero
- `--ink` bg, 2-column `1.4fr 1fr`
- Pulsing animated dot (CSS `@keyframes pulse`)
- 88px H1: "Sürgős eset?" + `--clay` colored second line
- Right: `--clay` phone card, large number 40px Inter Tight

**Pulse animation:**
```css
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(196,99,58,0.25); }
  50%       { box-shadow: 0 0 0 10px rgba(196,99,58,0.05); }
}
```

#### Symptom Checklist
- 4×2 grid of cards, `--clay`-tinted icon box, 18px title, 13px description
- 8 symptoms: Légzési nehézség · Súlyos vérzés · Eszméletvesztés/görcs · Mérgezés · Trauma · Vérrel járó hányás · Felfúvódás · Hőguta

#### Before Arrival
- `--bone` bg, 2-column `1fr 1.4fr`
- Left: sticky heading + emergency CTA
- Right: numbered steps (01–04), large `--moss` step number, 28px Inter Tight title

#### Emergency Contacts
- 2-column cards: `--clay` bg (off-hours phone) + `--ink` bg (opening hours table)

---

### 5. Kapcsolat (Contact & Booking) — `page-contact.jsx`

**Route:** `/kapcsolat`

#### 3-Step Booking Wizard
- Left panel: white card, 40px padding
  - Progress bar: 3 segments, `--moss` fill for completed steps
  - **Step 1:** Service selector (pill toggles) + Pet type (3 equal buttons)
  - **Step 2:** Day selector (horizontal scroll, date cards) + Time grid (4-column)
  - **Step 3:** Name, phone, email inputs + notes textarea
  - Back/Next navigation at bottom
- Right panel (sticky):
  - Summary card: `--bone` bg, 4 summary rows
  - Phone fallback card: `--ink` bg

#### Map + Contact Info
- Left: stylized SVG map with street grid, river, and location marker. `borderRadius 24px`. Overlaid address card and action buttons.
- Right: 4 contact info cards (Address · Phone · Email · Hours), each with icon + content

---

## Shared Components

### Nav (Desktop)
- `position: sticky, top: 0`, `height: 76px`
- `backdrop-filter: blur(14px)`, light: `rgba(250,247,241,0.86)` / dark: `rgba(22,24,28,0.92)`
- Logo (left) · Nav links (center) · Lang switcher + phone + CTA button (right)
- Active link: `--paper-2` bg pill
- Variant prop: `'light'` (default) | `'dark'` (used on emergency page)

### Mobile Nav
- Height: `64px`, hamburger button
- Full-screen overlay when open: large 28px Inter Tight nav items with bottom borders
- Bottom: stacked "Időpontfoglalás" primary + phone secondary buttons

### Logo
- SVG mark: circle outline + arch + dot + two small circles (stylized paw/stethoscope hybrid)
- Wordmark: "Bartók" (16px Inter Tight 600) + "Állatorvosi Rendelő" (10px Manrope 500, `--moss`)

### Footer
- `--ink` bg, 4-column grid: Logo+desc / Pages / Services / Contact
- Bottom bar: copyright left, legal links right
- All text `rgba(244,239,230,X)` on dark

### Sticky CTA (Desktop)
- Fixed bottom-right, appears after 600px scroll
- `transform: translateY(0/120%)` + `opacity` transition, `0.35s ease`
- Primary button with box-shadow

### Mobile Sticky CTA
- `position: sticky, bottom: 0`
- `backdrop-filter: blur(12px)`, `--stone` top border
- Phone icon button (52×52px circle) + full-width booking button

### Buttons
```
btn-primary:    --moss bg, --bone text · hover: --moss-deep
btn-secondary:  transparent, --stone-2 border · hover: --ink bg, --bone text
btn-ghost:      transparent, no border · hover: --paper-2 bg
btn-emergency:  --clay bg, white text · hover: #9A4525
btn-arrow:      adds "→" pseudo-element that translates +3px on hover
All:            border-radius 999px, padding 16px 22px, font-weight 600, 15px
```

### Chips
```
default:     --moss-tint bg, --moss-deep text
chip-stone:  --paper-2 bg, --ink-2 text
chip-clay:   --clay-soft bg, dark red text
chip-ink:    --ink bg, --bone text
chip-dot:    adds 7px circle before-element in currentColor
```

### Photo Placeholders
Replace all `.photo` divs with real photography. Current tones map to subject matter:
- `photo-warm` → dogs, clinic reception, lifestyle
- `photo-moss` → doctors, exam rooms, greenery
- `photo-ink` → surgery, equipment, night/moody shots

---

## Interactions & Behaviour

| Element | Behaviour |
|---|---|
| Nav links | Client-side page navigation, scroll container reset to top |
| Service cards | `translateY(-2px)` + `borderColor → --moss` on hover |
| FAQ accordion | One item open at a time; toggle with +/– button |
| Booking wizard | 3 steps; back/forward; progress bar fills per step |
| Day/time selectors | Single-select toggles; selected = ink/moss fill |
| Sticky CTA | Appears after `scrollY > 600px`; smooth slide-up |
| Emergency dot | CSS `pulse` keyframe animation, 2s infinite |
| Footer links | Navigate to respective pages |

---

## Mobile Behaviour (< 640px)

- Nav collapses to hamburger; overlay covers full screen
- Hero H1: 42px · Section H2: 32px
- All 2-column grids become single column
- Service cards become horizontal list items (icon + text + arrow)
- Sticky bottom bar: phone icon circle + full-width CTA
- Emergency page: red sticky bar replaces standard CTA

---

## Copy & Voice

**Language:** Hungarian primary. Keep all copy as-is unless client provides changes.

**Tone:** Calm, precise, warm — never salesy. Short sentences. No superlatives.
- ✅ "Foglaljon időpontot" / "Sürgős eset?" / "Ne várjon."
- ❌ "Klikkelj ide!" / "A legjobbak vagyunk!" / "Forradalmi technológia"

**Phone numbers:**
- Main clinic: `+36 52 123 456`
- Emergency 24/7: `+36 30 911 24 24`

**Address:** Bartók Béla út 47., 4032 Debrecen, Magyarország

**Email:** hello@bartokvet.hu · idopont@bartokvet.hu

**Hours:** H–P 08:00–19:00 · Szo 09:00–14:00 · V zárva (sürgősségi fogadás)

---

## Assets Needed (Photography)

The following real photos should replace placeholders — all warm, natural-light, documentary style:

| Slot | Subject |
|---|---|
| Hero (large) | Vet examining golden retriever on table, natural light |
| Hero (small 1) | Clinic interior / reception |
| Meet vets | Portrait: Dr. Szűcs Zsolt Tamás |
| Meet vets | Portrait: Dr. Győrfi László |
| Clinic grid | Reception with oak counter, plants, soft daylight |
| Clinic grid | Exam room |
| Clinic grid | Surgery suite |
| Clinic grid | Cat-only waiting nook |
| Services (×6) | Each service in action (exam, vaccination, ultrasound, surgery, dental, microchip) |

Photo style guidelines:
- Warm colour grade (not cool/clinical)
- Natural or soft window light preferred
- Shallow depth of field for portraits
- No stock photo aesthetic — real staff and animals only

---

## File Reference

| File | Contents |
|---|---|
| `styles.css` | Global design tokens, typography helpers, button classes, photo placeholders, layout utilities |
| `shared.jsx` | Icon set, Logo, Nav, MobileNav, Footer, StickyBookCTA, MobileStickyCTA |
| `page-home.jsx` | Full homepage — all sections |
| `page-services.jsx` | Services page, FAQ accordion, booking CTA |
| `page-doctors.jsx` | Vet profiles, values section |
| `page-emergency.jsx` | Emergency hero, symptom grid, before-arrival steps |
| `page-contact.jsx` | Booking wizard, SVG map, contact info cards |
| `page-mobile.jsx` | Mobile versions of Home, Services, Emergency |
| `Bartók Vet — Website.html` | Entry point — open this in a browser to view the full design canvas |

---

## How to View the Design

Open `Bartók Vet — Website.html` in any modern browser. You'll see a pan/zoom canvas with:
- **Desktop section:** All 5 pages side by side in browser chrome, fully scrollable and clickable
- **Mobile section:** 3 pages in phone bezels
- **Design system section:** Full colour, type, component reference

Pan with click-drag · Zoom with scroll/pinch · Double-click any artboard to fullscreen it.
