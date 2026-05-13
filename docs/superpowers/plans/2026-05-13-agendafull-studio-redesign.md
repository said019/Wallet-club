# AgendaFull Studio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign the static AgendaFull website from a loyalty-card product page into a premium digital systems studio landing page for fitness and wellness businesses.

**Architecture:** Keep the project as a static HTML/CSS site with no build step. Replace the current green loyalty-card landing page with a stronger single-page narrative, then update legal pages so they describe AgendaFull as a broader digital systems service.

**Tech Stack:** Static HTML, embedded CSS, vanilla JavaScript only if needed for lightweight interactions, local PNG/WebP assets.

---

## File Structure

- Modify `index.html`: Replace positioning, copy, visual system, sections, pricing, CTAs, and responsive styles.
- Modify `privacy.html`: Update service description from loyalty cards to digital systems, reservations, memberships, payments, communication, and automation.
- Modify `terms.html`: Update service description and terms language to match the broader AgendaFull service.
- No new runtime dependencies.
- No package install required.

## Baseline Verification

- [ ] **Step 1: Confirm project is static**

Run: `rg --files`

Expected: output includes `index.html`, `privacy.html`, `terms.html`, `1.png`, and `walletclub_logo_darkbg.png`, with no package manifest.

- [ ] **Step 2: Confirm working branch**

Run: `git branch --show-current`

Expected: `agendafull-studio-redesign`

### Task 1: Replace Landing Page Strategy And Structure

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace document metadata**

Use this title and description:

```html
<title>AgendaFull - Sistemas digitales premium para studios fitness</title>
<meta name="description"
    content="Creamos sistemas digitales a medida para studios fitness: reservas, membresías, Apple Wallet, pagos, WhatsApp y automatización para una experiencia premium.">
```

- [ ] **Step 2: Replace navigation labels**

Use these labels and anchors:

```html
<li><a href="#experiencia">Experiencia</a></li>
<li><a href="#sistemas">Sistemas</a></li>
<li><a href="#casos">Casos</a></li>
<li><a href="#proceso">Proceso</a></li>
<li><a href="https://wa.me/TUNUMERO?text=Hola,%20quiero%20diseñar%20un%20sistema%20digital%20para%20mi%20studio" class="nav-cta">Hablar por WhatsApp</a></li>
```

- [ ] **Step 3: Replace hero copy**

Use this headline, body, and CTAs:

```html
<div class="hero-badge">Sistemas a medida para fitness y wellness</div>
<h1>Sistemas digitales para studios que quieren sentirse tan premium como sus clases.</h1>
<p class="hero-subtitle">Creamos reservas, membresías, Apple Wallet, pagos y automatizaciones a la medida de tu studio, para que tus alumnos vivan una experiencia fluida desde que apartan hasta que vuelven.</p>
<a href="https://wa.me/TUNUMERO?text=Hola,%20quiero%20diseñar%20un%20sistema%20digital%20para%20mi%20studio" class="btn btn-primary">Diseñar mi sistema</a>
<a href="#sistemas" class="btn btn-secondary">Ver lo que podemos construir</a>
```

- [ ] **Step 4: Replace old pricing section**

Remove plan cards for loyalty pricing. Replace with a consultative section explaining that each system is scoped after understanding the studio operation.

Required copy:

```html
<h2>No vendemos plantillas. Diseñamos el flujo que tu studio necesita.</h2>
<p>Cada proyecto se cotiza según módulos, integraciones y nivel de operación: reservas, membresías, pagos, Wallet, WhatsApp, panel administrativo y automatizaciones.</p>
```

### Task 2: Implement Premium Visual System

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace CSS color tokens**

Use OKLCH-based tokens:

```css
:root {
    --base: oklch(96% 0.012 80);
    --surface: oklch(98% 0.008 80);
    --ink: oklch(18% 0.018 265);
    --muted: oklch(43% 0.025 270);
    --line: oklch(84% 0.018 80);
    --plum: oklch(38% 0.075 335);
    --clay: oklch(62% 0.09 38);
    --mint: oklch(82% 0.08 165);
    --soft-plum: oklch(92% 0.028 335);
    --shadow: 0 24px 80px rgba(35, 24, 39, 0.12);
}
```

- [ ] **Step 2: Rebuild hero visual as multi-surface product stack**

Create a visual with:

- Booking panel
- Wallet membership card
- Admin schedule strip
- WhatsApp reminder chip

The visual must be built in HTML/CSS, not as an external image, so the page stays self-contained.

- [ ] **Step 3: Remove repeated generic card grid feel**

Use varied section layouts:

- Problem section as a split narrative with a compact workflow list.
- Experience section as a horizontal journey.
- Systems section as grouped modules.
- Case section as a focused pilates studio example.
- Process section as four clear steps.

- [ ] **Step 4: Ensure mobile layout is stable**

At widths under `760px`:

- Navigation links collapse to fewer visible items or wrap cleanly.
- Hero becomes one column.
- Interface visual scales without horizontal overflow.
- Buttons stack or wrap without text clipping.

### Task 3: Replace Landing Page Content Sections

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Add problem section**

Include this message:

```html
<h2>Cuando todo vive en WhatsApp, Excel y links sueltos, la experiencia deja de sentirse premium.</h2>
```

- [ ] **Step 2: Add student experience section**

Show the journey:

```text
Descubre la clase → Reserva → Usa su membresía → Recibe recordatorio → Hace check-in → Regresa
```

- [ ] **Step 3: Add systems module section**

Include these modules:

```text
Reservas y horarios
Membresías y paquetes
Apple Wallet y Google Wallet
Pagos y pedidos
WhatsApp automático
Panel administrativo
Lealtad y retención
Flujos a medida
```

- [ ] **Step 4: Add fitness case section**

Use pilates as the main case and include:

```text
Para un studio de pilates: clases por cupo, paquetes de sesiones, pase digital en Wallet, recordatorios por WhatsApp y un panel para que el equipo vea reservas, pagos y asistencia.
```

- [ ] **Step 5: Add secondary business section**

Include barberías, comida, and servicios as smaller examples to show adaptability without weakening the fitness focus.

- [ ] **Step 6: Add process section**

Use four steps:

```text
Entendemos tu operación
Diseñamos el flujo digital
Construimos y conectamos el sistema
Lanzamos, medimos y mejoramos
```

### Task 4: Update Legal Pages

**Files:**
- Modify: `privacy.html`
- Modify: `terms.html`

- [ ] **Step 1: Update privacy introduction**

Replace the loyalty-only description with:

```html
<p>En AgendaFull, nos tomamos muy en serio tu privacidad. Esta Política de Privacidad describe cómo recopilamos, usamos y protegemos tu información personal cuando utilizas nuestros sistemas digitales, incluyendo reservas, membresías, pagos, comunicación, pases digitales y automatizaciones para negocios.</p>
```

- [ ] **Step 2: Update terms introduction**

Replace the service welcome with:

```html
<p>Bienvenido a AgendaFull. Diseñamos y operamos sistemas digitales para negocios, incluyendo reservas, membresías, pagos, comunicación, pases digitales, lealtad y automatizaciones. Al utilizar nuestros servicios, aceptas cumplir con los siguientes Términos y Condiciones.</p>
```

- [ ] **Step 3: Search for stale language**

Run: `rg -n "tarjetas de lealtad|papelitos|WalletClub|Wallet-club" privacy.html terms.html index.html`

Expected: no stale positioning remains except where Wallet is part of Apple Wallet or Google Wallet modules.

### Task 5: Verify And Commit

**Files:**
- Verify: `index.html`
- Verify: `privacy.html`
- Verify: `terms.html`

- [ ] **Step 1: Validate HTML files parse enough for static serving**

Run: `python3 -m http.server 8080`

Expected: local server starts and serves files.

- [ ] **Step 2: Inspect desktop rendering**

Open `http://127.0.0.1:8080/index.html` in a browser or screenshot tool.

Expected:

- First viewport clearly says AgendaFull builds premium digital systems for studios.
- No text overlaps.
- Hero visual is visible and not blank.
- Colors are no longer the old green/cream loyalty-card palette.

- [ ] **Step 3: Inspect mobile rendering**

Use a narrow viewport around 390px wide.

Expected:

- Hero text fits.
- CTAs fit.
- Visual stack does not overflow horizontally.
- Sections remain readable.

- [ ] **Step 4: Check git diff**

Run: `git diff -- index.html privacy.html terms.html`

Expected: changes are scoped to repositioning, visual redesign, and legal wording.

- [ ] **Step 5: Commit**

Run:

```bash
git add index.html privacy.html terms.html docs/superpowers/plans/2026-05-13-agendafull-studio-redesign.md
git commit -m "Redesign AgendaFull as digital systems studio"
```
