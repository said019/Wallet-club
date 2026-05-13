# Design

## Style Summary

AgendaFull should feel like a premium technology studio for boutique fitness and wellness brands. The visual direction is precise, calm, digital, and operational, closer to a polished product system than an editorial wellness page.

## Color

Use OKLCH tokens. Avoid the old green/cream loyalty palette, purple as the dominant identity, and overly warm blush/burgundy styling. The current direction uses cool mist neutrals, deep ink blue, teal/cyan, signal green, and small amber highlights.

```css
:root {
    --base: oklch(96% 0.012 220);
    --surface: oklch(98% 0.009 220);
    --ink: oklch(18% 0.035 245);
    --muted: oklch(43% 0.028 245);
    --line: oklch(83% 0.019 225);
    --plum: oklch(45% 0.095 210);
    --clay: oklch(67% 0.12 82);
    --mint: oklch(79% 0.13 165);
    --soft-plum: oklch(91% 0.03 215);
    --shadow: 0 24px 80px rgba(20, 38, 62, 0.14);
}
```

Color strategy: cool technical base with committed teal/cyan moments, deep ink sections, signal green states, and tiny amber highlights.

## Typography

Use a clean technology sans for headings and body text, with strong weight contrast and short copy. The page should feel more product-system than editorial.

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
