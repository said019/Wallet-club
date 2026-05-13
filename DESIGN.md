# Design

## Style Summary

AgendaFull should feel like a premium digital systems studio for boutique fitness and wellness brands. The visual direction is calm, crafted, and technical enough to signal capability, while still feeling human and approachable for local business owners.

## Color

Use OKLCH tokens. Avoid the old green/cream loyalty palette as the dominant identity.

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

Color strategy: restrained base with committed plum/clay moments and small mint digital signals.

## Typography

Use a confident sans-serif system with strong hierarchy, generous line height, and no tiny low-contrast support copy. The existing static setup can continue using Google Fonts, but the page should not feel like the previous DM Sans SaaS template.

Use large hero type, compact labels sparingly, and body copy capped to comfortable reading lengths.

## Layout

Favor varied layouts over repeated cards:

- Hero with asymmetric copy and a multi-surface product stack.
- Problem section as a split narrative.
- Student experience as a journey.
- Systems as grouped modules.
- Pilates case as a focused proof section.
- Process as a clean four-step sequence.

Cards are allowed for individual modules, but avoid cards inside cards and avoid endless identical icon grids.

## Components

Primary CTA: solid plum or ink with clear hover feedback.

Secondary CTA: bordered or soft surface treatment with enough contrast.

Product visuals: semantic HTML/CSS mock interfaces that show booking, Wallet, admin schedule, and WhatsApp reminders.

## Motion

Motion should be subtle and precise. Hover states can lift or tint. Interface panels can have gentle transform transitions. Avoid bounce, elastic easing, decorative glass blur, and layout-shifting animations.

## Responsive Behavior

The page must work cleanly on mobile:

- Hero becomes one column.
- Navigation wraps or simplifies.
- CTA text does not clip.
- Product stack stays inside the viewport.
- Section rhythm remains readable without oversized hero type.
