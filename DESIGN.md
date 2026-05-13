# Design

## Style Summary

AgendaFull should feel like a premium digital systems studio for boutique fitness and wellness brands. The visual direction is warm, editorial, calm, and crafted, closer to a thoughtful creative studio than a purple SaaS dashboard.

## Color

Use OKLCH tokens. Avoid the old green/cream loyalty palette and avoid purple as the dominant identity. The current direction uses blush, burgundy, wine, soft clay, and restrained green only as a small signal.

```css
:root {
    --base: oklch(94% 0.034 31);
    --surface: oklch(98% 0.018 35);
    --ink: oklch(27% 0.064 27);
    --muted: oklch(43% 0.048 28);
    --line: oklch(82% 0.032 30);
    --plum: oklch(34% 0.082 27);
    --clay: oklch(58% 0.095 38);
    --mint: oklch(78% 0.047 144);
    --soft-plum: oklch(89% 0.042 18);
    --shadow: 0 24px 80px rgba(35, 24, 39, 0.12);
}
```

Color strategy: blush editorial base with committed burgundy/wine moments and small mint digital signals.

## Typography

Use a high-contrast editorial serif for major headings and a clean sans for body/interface text. The page should not feel like the previous DM Sans SaaS template or a purple dashboard.

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
