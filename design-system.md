# Austin Clinician Circle — Design System

> **Version:** 1.0 (Draft)
> **Date:** April 20, 2026
> **Direction:** Warm, organic, earthy — complementing restoredfamily.com
> **Reference:** restoredfamily.com (primary), shelterwoodcollective.com (structural inspiration)

---

## 1. Design Philosophy

ACC is a professional network for therapists. The design should feel:
- **Warm and grounded** — not clinical, not corporate
- **Professional but approachable** — like a trusted colleague
- **Clean and modern** — generous whitespace, clear hierarchy
- **Organic** — natural tones, rounded shapes, earthy textures

Sarah wants the site to "complement" restoredfamily.com — same family of aesthetics, not a copy.

---

## 2. Color Palette

### Extracted from restoredfamily.com (reference)

| Token | Hex | RGB | Usage on restoredfamily.com |
|---|---|---|---|
| Deep Sage | `#4A5D4E` | `rgb(74, 93, 78)` | Hero background, CTA sections, accent |
| Soft Cream | `#F2EDE4` | `rgb(242, 237, 228)` | Alternating section backgrounds |
| Warm White | `#FAF8F5` | `rgb(250, 248, 245)` | Main content backgrounds |
| Charcoal | `#2D2D2D` | `rgb(45, 45, 45)` | Primary body text |
| White | `#FFFFFF` | `rgb(255, 255, 255)` | Text on dark, button fill |

### ACC Palette (complementary — same family, distinct identity)

#### Core Colors

| Token | Hex | Usage |
|---|---|---|
| `--color-sage-900` | `#2F3E33` | Primary dark (nav bg, footer, hero overlay) |
| `--color-sage-800` | `#3B4D3F` | Dark sections, hover states |
| `--color-sage-700` | `#4A5D4E` | Primary brand (buttons, links, accents) — matches restoredfamily |
| `--color-sage-600` | `#5A7060` | Secondary accents, active states |
| `--color-sage-500` | `#6B8572` | Lighter accents, icons |
| `--color-sage-100` | `#E8EDE9` | Light sage tint for subtle backgrounds |
| `--color-sage-50` | `#F3F6F4` | Barely-there sage wash |

#### Neutral Warmth

| Token | Hex | Usage |
|---|---|---|
| `--color-cream-100` | `#FAF8F5` | Page background (warm white) |
| `--color-cream-200` | `#F2EDE4` | Section alternating background (soft cream) |
| `--color-cream-300` | `#E8E0D4` | Card borders, dividers |
| `--color-cream-400` | `#D4C9B9` | Subtle borders, disabled states |

#### Text

| Token | Hex | Usage |
|---|---|---|
| `--color-text-primary` | `#2D2D2D` | Headings, body text on light backgrounds |
| `--color-text-secondary` | `#5C5C5C` | Subtext, captions, meta info |
| `--color-text-tertiary` | `#8A8A8A` | Placeholders, disabled text |
| `--color-text-inverse` | `#FFFFFF` | Text on dark/sage backgrounds |
| `--color-text-inverse-muted` | `rgba(255,255,255,0.7)` | Subtext on dark backgrounds |

#### Functional

| Token | Hex | Usage |
|---|---|---|
| `--color-success` | `#4A7C59` | Success states, active badges |
| `--color-warning` | `#C4932A` | Warnings, pending states |
| `--color-error` | `#B54B4B` | Errors, destructive actions |
| `--color-info` | `#4A6F8C` | Info badges, links |

#### Accent (optional — use sparingly)

| Token | Hex | Usage |
|---|---|---|
| `--color-gold` | `#C9A96E` | Premium highlights, membership badge |
| `--color-terracotta` | `#C07A5A` | Warm accent for CTAs or callouts |

---

## 3. Typography

### Font Stack

| Role | Font | Fallback |
|---|---|---|
| **Headings (display/serif)** | `Cormorant Garamond` | `Georgia`, `Times New Roman`, `serif` |
| **Body (sans-serif)** | `Plus Jakarta Sans` | `Inter`, `Segoe UI`, `Helvetica`, `sans-serif` |
| **Mono (code/data)** | `JetBrains Mono` | `Fira Code`, `Consolas`, `monospace` |

Both fonts match restoredfamily.com exactly. Load via Google Fonts.

### Type Scale

| Token | Size | Weight | Line Height | Usage |
|---|---|---|---|---|
| `display-lg` | `56px` / `3.5rem` | 400 | 1.1 | Hero headline |
| `display-sm` | `40px` / `2.5rem` | 400 | 1.2 | Section headlines |
| `heading-1` | `32px` / `2rem` | 600 | 1.3 | Page titles |
| `heading-2` | `24px` / `1.5rem` | 600 | 1.3 | Section titles |
| `heading-3` | `20px` / `1.25rem` | 600 | 1.4 | Card titles, subsection |
| `body-lg` | `18px` / `1.125rem` | 400 | 1.6 | Lead paragraphs |
| `body` | `16px` / `1rem` | 400 | 1.6 | Default body text |
| `body-sm` | `14px` / `0.875rem` | 400 | 1.5 | Captions, meta, labels |
| `caption` | `12px` / `0.75rem` | 500 | 1.4 | Badges, tags, fine print |

### Rules
- Headings always use `Cormorant Garamond` (serif)
- Body text always uses `Plus Jakarta Sans` (sans-serif)
- Max line width: `680px` for body text readability
- Use `font-weight: 400` for most text, `600` for emphasis and headings
- All serif headings are sentence case, not ALL CAPS (warm, not corporate)

---

## 4. Spacing

Use a consistent `4px` base rhythm.

| Token | Value | Usage |
|---|---|---|
| `--space-1` | `4px` | Tight gaps, icon padding |
| `--space-2` | `8px` | Small gaps, tag padding |
| `--space-3` | `12px` | Input padding, inline spacing |
| `--space-4` | `16px` | Card padding, form gaps |
| `--space-5` | `20px` | Group spacing |
| `--space-6` | `24px` | Section internal padding |
| `--space-8` | `32px` | Component gaps |
| `--space-10` | `40px` | Section padding (mobile) |
| `--space-12` | `48px` | Section dividers |
| `--space-16` | `64px` | Section padding (desktop) |
| `--space-20` | `80px` | Large section gaps |
| `--space-24` | `96px` | Hero/footer padding |

---

## 5. Shape & Borders

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `6px` | Tags, badges, small elements |
| `--radius-md` | `10px` | Inputs, small cards |
| `--radius-lg` | `16px` | Cards, modals |
| `--radius-xl` | `24px` | Large cards, image containers |
| `--radius-full` | `9999px` | Buttons, pills, avatars |

### Borders
- Default border: `1px solid var(--color-cream-300)`
- Subtle divider: `1px solid var(--color-cream-400)`
- Focus ring: `2px solid var(--color-sage-700)` with `2px` offset

---

## 6. Shadows

| Token | Value | Usage |
|---|---|---|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Inputs, small cards |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.08)` | Cards, dropdowns |
| `--shadow-lg` | `0 8px 24px rgba(0,0,0,0.10)` | Modals, popovers |
| `--shadow-xl` | `0 16px 48px rgba(0,0,0,0.12)` | Hero cards, featured elements |

Shadows should be warm and soft — never harsh or blue-tinted.

---

## 7. Components

### Buttons

| Variant | Background | Text | Border | Radius |
|---|---|---|---|---|
| **Primary** | `--color-sage-700` | `white` | none | `--radius-full` |
| **Primary Hover** | `--color-sage-800` | `white` | none | `--radius-full` |
| **Secondary** | `transparent` | `--color-sage-700` | `1px solid --color-sage-700` | `--radius-full` |
| **Secondary Hover** | `--color-sage-50` | `--color-sage-800` | `1px solid --color-sage-800` | `--radius-full` |
| **Ghost** | `transparent` | `--color-text-primary` | none | `--radius-full` |
| **Inverse (on dark)** | `white` | `--color-sage-700` | none | `--radius-full` |
| **Destructive** | `--color-error` | `white` | none | `--radius-full` |

**Sizes:**
- `sm`: `h-8`, `px-4`, `text-sm`
- `md`: `h-10`, `px-6`, `text-body`
- `lg`: `h-12`, `px-8`, `text-body-lg`

### Cards

```
Background:     white (#FFFFFF)
Border:         1px solid var(--color-cream-300)
Border-radius:  var(--radius-lg) — 16px
Padding:        var(--space-6) — 24px
Shadow:         var(--shadow-md)
Hover:          var(--shadow-lg), slight translate-y (-2px)
```

### Clinician Profile Card

```
┌──────────────────────────────┐
│  ┌──────┐                    │
│  │ Photo │  Name, Credentials│
│  │ (1:1) │  Tagline / brief  │
│  └──────┘                    │
│                              │
│  [Tag] [Tag] [Tag]           │
│                              │
│  [View Profile →]            │
└──────────────────────────────┘

Photo:       120x120, rounded-full (circle), object-cover
Tags:        bg: --color-sage-50, text: --color-sage-700, radius-sm
CTA link:    text: --color-sage-700, underline on hover
```

### Navigation

```
Desktop:
- Fixed top, transparent on hero → solid (cream-100) on scroll
- Logo left, links center, "Login" + "Join" right
- Links: Plus Jakarta Sans, body-sm, weight 500
- Active link: sage-700 underline

Mobile:
- Hamburger menu → full-screen overlay with sage-900 background
- Links stacked, display-sm size, white text
```

### Form Inputs

```
Background:     white
Border:         1px solid var(--color-cream-400)
Border-radius:  var(--radius-md) — 10px
Padding:        12px 16px
Font:           Plus Jakarta Sans, body
Focus:          border-color: var(--color-sage-700), ring: 2px sage-700/20
Error:          border-color: var(--color-error), helper text in error color
```

### Tags / Badges

```
Background:     var(--color-sage-50)
Text:           var(--color-sage-700)
Font:           caption (12px), weight 500
Padding:        4px 10px
Border-radius:  var(--radius-sm) — 6px
```

### Membership Pricing Card

```
┌──────────────────────────────┐
│        Monthly Plan          │  ← heading-2
│                              │
│     $XX /month               │  ← display-sm, sage-700
│                              │
│  ✓ Case consultation         │
│  ✓ CEU access                │  ← body, check icons in sage-500
│  ✓ Resource library          │
│  ✓ Directory listing         │
│  ✓ Referral network          │
│  ✓ Coaching discount         │
│                              │
│  ┌──────────────────────┐    │
│  │    Join the Circle    │    │  ← Primary button, full-width
│  └──────────────────────┘    │
└──────────────────────────────┘

Border:     2px solid var(--color-sage-700)
Radius:     var(--radius-xl) — 24px
Shadow:     var(--shadow-xl)
```

---

## 8. Layout

### Grid

- Max content width: `1280px`
- Side padding: `24px` (mobile), `48px` (tablet), `80px` (desktop)
- Column grid: 12-column for desktop, collapse to single on mobile
- Gutter: `24px` (mobile), `32px` (desktop)

### Section Pattern

```
hero (sage-900 bg, full-bleed)
  ↓
value props (cream-100 bg)
  ↓
feature detail (cream-200 bg)
  ↓
social proof / directory preview (cream-100 bg)
  ↓
CTA section (sage-700 bg, full-bleed)
  ↓
footer (sage-900 bg, full-bleed)
```

Alternate between `cream-100` and `cream-200` for visual rhythm.
Dark sections (hero, CTA, footer) use the sage palette.

### Responsive Breakpoints

| Token | Value | Description |
|---|---|---|
| `sm` | `640px` | Large phones |
| `md` | `768px` | Tablets |
| `lg` | `1024px` | Small laptops |
| `xl` | `1280px` | Desktops |
| `2xl` | `1536px` | Large screens |

---

## 9. Imagery & Media

- **Photo style:** Warm, natural lighting. Diverse professionals. Candid over posed. No stock-feeling images.
- **Photo treatment:** Slight warm filter, desaturated slightly. Avoid cool/blue tones.
- **Placeholder photos:** Use warm-toned placeholder images for prototype.
- **Icons:** Lucide React — use outline style, `stroke-width: 1.5`, sized at `20px` (inline) or `24px` (standalone).
- **Logo:** TBD — placeholder text logo "Austin Clinician Circle" in Cormorant Garamond, weight 600.

---

## 10. Motion & Animation

Keep motion subtle and purposeful. This is a professional site, not a playful one.

| Interaction | Animation | Duration | Easing |
|---|---|---|---|
| Page transitions | Fade in | `300ms` | `ease-out` |
| Card hover | `translateY(-2px)` + shadow lift | `200ms` | `ease` |
| Button hover | Background color shift | `150ms` | `ease` |
| Nav scroll | Background opacity | `200ms` | `ease` |
| Modal open | Fade + scale from `0.95` | `200ms` | `ease-out` |
| Skeleton loading | Shimmer pulse | `1.5s` | `ease-in-out` |

No bounce, no spring, no parallax. Clean and restrained.

---

## 11. Tailwind CSS Configuration Reference

```js
// tailwind.config.ts — key custom values
{
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#F3F6F4',
          100: '#E8EDE9',
          500: '#6B8572',
          600: '#5A7060',
          700: '#4A5D4E',
          800: '#3B4D3F',
          900: '#2F3E33',
        },
        cream: {
          100: '#FAF8F5',
          200: '#F2EDE4',
          300: '#E8E0D4',
          400: '#D4C9B9',
        },
        gold: '#C9A96E',
        terracotta: '#C07A5A',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '24px',
      },
      maxWidth: {
        'content': '1280px',
        'prose': '680px',
      },
    },
  },
}
```

---

## 12. Accessibility

- All text meets WCAG 2.1 AA contrast ratios (4.5:1 for body, 3:1 for large text)
- Sage-700 (`#4A5D4E`) on cream-100 (`#FAF8F5`): **contrast ratio ~4.8:1** — passes AA
- White on sage-700: **contrast ratio ~5.2:1** — passes AA
- Charcoal (`#2D2D2D`) on cream-100: **contrast ratio ~12.5:1** — passes AAA
- Focus states must be visible (2px ring)
- All interactive elements must be keyboard-navigable
- Images must have alt text
- Form inputs must have labels
