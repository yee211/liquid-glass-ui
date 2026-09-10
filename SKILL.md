---
name: liquid-glass-ui
description: |
  Professional Liquid Glassmorphism & Jelly Crystal Design System. Use when:
  (1) Designing or refactoring modern web UIs with frosted glass or fluid optical glass aesthetics
  (2) Creating jelly/crystal cards, pill-shaped buttons, modals, or ambient liquid canvases
  (3) Implementing physics-based specular highlights, dual-layer shadows, and spring micro-interactions
  (4) Responding to requests for '液态毛玻璃', '果冻水晶', '磨砂玻璃', '玻璃拟态', 'liquid glass', 'glassmorphism', or 'jelly crystal'
  Compatible with: Claude (Claude Code, Claude 3.5/3.7 Sonnet), Codex (OpenAI Codex, GPT-4o, Cursor, Copilot)
---

# Liquid Glass UI - Physical Optical Glassmorphism & Crystal Jelly Design System

<system_role>
You are an expert UI/UX and Frontend Architect specialized in physical optical glassmorphism (液态全透明毛玻璃) and crystal jelly styling (果冻水晶质感).
When this skill is activated, you MUST strictly adhere to the physical optical specifications, design tokens, micro-interactions, and anti-patterns defined below.
</system_role>

---

## 1. Core Visual Philosophy (核心物理光学美学)

Ordinary glassmorphism often fails by looking like a flat, cheap white overlay (`background: rgba(255,255,255,0.2); backdrop-filter: blur(10px)`). 
**Liquid Glass UI** reproduces authentic physical optical realism through **four distinct layers**:

1. **Specular Top Highlight (顶部微棱高光)**: Simulates the bright edge-cut reflection where light hits the top chamfer of real glass (`inset 0 1.5px 0.5px rgba(255, 255, 255, 0.9)`).
2. **Bottom Refraction & Thickness (底部折射厚度微阴影)**: Simulates refractive depth and bottom-lip light occlusion (`inset 0 -1px 1px rgba(170, 192, 224, 0.18)`).
3. **Dual-Layer Ambient Glow Shadow (空气感双层弥散阴影)**: Provides hovering depth without muddy darkness (a wide soft shadow + a tight contact shadow).
4. **Color-Mix Jelly Translucency (果冻水晶色阶混合)**: Utilizes modern CSS `color-mix(in srgb, ...)` to blend bright specular light, semi-transparent color, and ambient background into a luscious jelly-like material.

---

## 2. Design Tokens & Variables (核心设计变量)

### Vanilla CSS Tokens (Place in `:root` or Global CSS)
```css
:root {
  /* 1. Base Glass Material */
  --liquid-glass-bg: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.22) 0%,
    rgba(255, 255, 255, 0.04) 50%,
    rgba(255, 255, 255, 0.10) 100%
  );
  --liquid-glass-border: rgba(255, 255, 255, 0.55);

  /* 2. Physics Highlights & Shadows */
  --specular-highlight: inset 0 1.5px 0.5px rgba(255, 255, 255, 0.9);
  --refraction-shadow: inset 0 -1px 1px rgba(170, 192, 224, 0.18);
  --ambient-glow-shadow: 
    0 16px 36px -10px rgba(42, 65, 105, 0.08),
    0 6px 16px -4px rgba(42, 65, 105, 0.04);

  /* 3. Optical Filter */
  --blur-filter: blur(24px) saturate(180%) contrast(102%);

  /* 4. Spring Easing Curves */
  --spring-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  --smooth-easing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Tailwind CSS Extension (`tailwind.config.js`)
```javascript
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'liquid-glow': '0 16px 36px -10px rgba(42, 65, 105, 0.08), 0 6px 16px -4px rgba(42, 65, 105, 0.04)',
        'specular': 'inset 0 1.5px 0.5px rgba(255, 255, 255, 0.9)',
        'refraction': 'inset 0 -1px 1px rgba(170, 192, 224, 0.18)',
        'liquid-composite': '0 16px 36px -10px rgba(42, 65, 105, 0.08), 0 6px 16px -4px rgba(42, 65, 105, 0.04), inset 0 1.5px 0.5px rgba(255, 255, 255, 0.9), inset 0 -1px 1px rgba(170, 192, 224, 0.18)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fluid': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'liquid': '24px',
      }
    }
  }
};
```

---

## 3. Essential Component Blueprints (核心组件代码蓝图)

### Blueprint 1: Universal Glass Container / Panel (`.glass`)
Used for headers, toolbars, dashboards, settings cards.

```css
.glass {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0.04) 50%,
    rgba(255, 255, 255, 0.10) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.60);
  border-radius: 24px;
  box-shadow: 
    0 16px 36px -10px rgba(42, 65, 105, 0.08),
    0 6px 16px -4px rgba(42, 65, 105, 0.04),
    inset 0 1.5px 0.5px rgba(255, 255, 255, 0.9),
    inset 0 -1px 1px rgba(170, 192, 224, 0.18);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
}
```

---

### Blueprint 2: Jelly Crystal Color Card (`.crystal-card`)
Used for tags, event blocks, courses, status badges, highlighted cards.
**CRITICAL**: MUST calculate gradient & shadows using dynamic CSS `color-mix`.

```css
.crystal-card {
  --card-color: #38bdf8; /* Replace dynamically via style="--card-color: ..." */
  
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  padding: 10px 14px;
  cursor: pointer;
  color: #ffffff;
  
  /* 1. Translucent Jelly Gradient */
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--card-color) 68%, rgba(255, 255, 255, 0.85)) 0%,
    color-mix(in srgb, var(--card-color) 78%, rgba(255, 255, 255, 0.20)) 50%,
    color-mix(in srgb, var(--card-color) 88%, transparent) 100%
  );
  
  /* 2. Micro-crystalline Bevel Border */
  border: 1px solid color-mix(in srgb, var(--card-color) 35%, rgba(255, 255, 255, 0.85));
  
  /* 3. Quadruple Optical Shadow */
  box-shadow:
    0 8px 20px -3px color-mix(in srgb, var(--card-color) 32%, transparent),
    0 4px 10px -2px color-mix(in srgb, var(--card-color) 20%, transparent),
    inset 0 1.5px 0.5px rgba(255, 255, 255, 0.88),
    inset 0 -1px 1px color-mix(in srgb, var(--card-color) 80%, #000000 20%);
    
  transition: 
    transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1),
    box-shadow 0.25s ease,
    filter 0.2s ease;
}

/* Fluid Sheen Sweep (液体扫光动效) */
.crystal-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -80%;
  width: 55%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.35) 50%,
    transparent 100%
  );
  transform: skewX(-25deg);
  pointer-events: none;
  transition: left 0.65s cubic-bezier(0.4, 0, 0.2, 1);
}

.crystal-card:hover {
  transform: translateY(-2px) scale(1.02);
  filter: brightness(1.06);
  box-shadow:
    0 14px 28px -2px color-mix(in srgb, var(--card-color) 45%, transparent),
    0 6px 14px -2px color-mix(in srgb, var(--card-color) 28%, transparent),
    inset 0 2px 0.8px rgba(255, 255, 255, 0.95);
  z-index: 3;
}

.crystal-card:hover::before {
  left: 145%; /* Smooth light sweep across the card */
}

.crystal-card:active {
  transform: translateY(0) scale(0.97);
}

.crystal-card .title {
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35); /* Crisp text legibility over jelly */
}
```

---

### Blueprint 3: Liquid Capsule Button (`.liquid-btn`)
Used for primary calls to action, pill buttons, filter bars.

```css
.liquid-btn {
  position: relative;
  overflow: hidden;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 30em; /* Perfect capsule */
  border: 1px solid rgba(255, 255, 255, 0.75);
  background: linear-gradient(
    135deg, 
    rgba(255, 255, 255, 0.30) 0%, 
    rgba(255, 255, 255, 0.10) 100%
  );
  color: #1e293b;
  font-weight: 600;
  font-size: 0.94rem;
  cursor: pointer;
  box-shadow: 
    0 6px 16px -2px rgba(50, 75, 110, 0.10),
    inset 0 1.5px 0.5px rgba(255, 255, 255, 0.95),
    inset 0 -1px 1px rgba(180, 200, 230, 0.25);
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Expanding fluid fill on hover */
.liquid-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  width: 0;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.25) 0%, rgba(129, 140, 248, 0.30) 100%);
  transition: width 0.35s ease;
  display: block;
  z-index: -1;
}

.liquid-btn:hover {
  transform: translateY(-2px);
  color: #0f172a;
  box-shadow: 
    0 10px 22px -3px rgba(50, 75, 110, 0.16),
    inset 0 1.5px 0.5px #ffffff;
}

.liquid-btn:hover::before {
  width: 100%;
}

.liquid-btn:active {
  transform: translateY(0) scale(0.97);
}
```

---

### Blueprint 4: Modal Dialog with Deep Saturated Backdrop (`.liquid-modal`)
Used for dialogs, drawer editors, auth modals.

```css
.liquid-backdrop {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  padding: 20px;
  background: radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.25) 0%, rgba(15, 23, 42, 0.45) 100%);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  animation: backdrop-in 0.25s ease-out;
}

.liquid-modal {
  width: min(520px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  padding: 28px;
  border-radius: 28px;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.82) 0%,
    rgba(244, 248, 255, 0.65) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.88);
  box-shadow:
    0 30px 60px -12px rgba(25, 35, 60, 0.24),
    0 14px 24px -6px rgba(25, 35, 60, 0.12),
    inset 0 2px 0.8px rgba(255, 255, 255, 0.98),
    inset 0 -1.5px 1px rgba(180, 200, 230, 0.30);
  backdrop-filter: blur(36px) saturate(180%);
  -webkit-backdrop-filter: blur(36px) saturate(180%);
  animation: modal-pop 0.32s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes modal-pop {
  from { opacity: 0; transform: scale(0.92) translateY(14px); }
  to   { opacity: 1; transform: scale(1) translateY(0); }
}

/* Glass Groove Inputs */
.liquid-modal input,
.liquid-modal select {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.70);
  padding: 12px 14px;
  outline: none;
  color: #0f172a;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  box-shadow: inset 0 1px 2px rgba(15, 23, 42, 0.04);
  transition: all 0.2s ease;
}

.liquid-modal input:focus,
.liquid-modal select:focus {
  border-color: #38bdf8;
  background: rgba(255, 255, 255, 0.94);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.25), inset 0 1px 2px rgba(15, 23, 42, 0.04);
}
```

---

### Blueprint 5: Ambient Fluid Canvas & Blobs (`.ambient-canvas`)
Glass requires a colored background behind it to show off its refraction.

```html
<div class="ambient-canvas" aria-hidden="true">
  <div class="blob blob-1"></div>
  <div class="blob blob-2"></div>
  <div class="blob blob-3"></div>
  <div class="blob blob-4"></div>
</div>
```

```css
.ambient-canvas {
  position: fixed;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
  background:
    radial-gradient(circle at 18% 18%, rgba(129, 140, 248, 0.16), transparent 34%),
    radial-gradient(circle at 82% 24%, rgba(56, 189, 248, 0.12), transparent 32%);
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(85px);
  opacity: 0.60;
  pointer-events: none;
}

.blob-1 {
  width: 520px;
  height: 520px;
  top: -160px;
  right: -90px;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.55) 0%, rgba(99, 102, 241, 0.28) 70%, transparent 100%);
}

.blob-2 {
  width: 580px;
  height: 580px;
  bottom: -220px;
  left: -140px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.48) 0%, rgba(192, 132, 252, 0.25) 70%, transparent 100%);
}
```

---

## 4. Multi-Mode Adaptation (`data-bg` Switcher)

Support 4 global background modes on `<html>` or `<body data-bg="...">`:

| Mode | `data-bg` Value | Visual Characteristics | Key Adjustments |
| :--- | :--- | :--- | :--- |
| **Transparent** | `transparent` | Ultra-clear, minimal opacity, maximum background transmission | Glass opacity 0.04~0.22, light subtle border |
| **Aurora** | `aurora` | Glowing, vibrant, ethereal light | Body has soft radial gradient, ambient opacity +20% |
| **Frosted** | `frosted` | Soft white diffuse matte, high legibility | Higher glass opacity (0.30~0.68), crisp borders |
| **Night** | `night` | Cyber / Dark luxury optical glass | Dark glass `rgba(2,6,23,0.42)`, slate borders, pale specular |

```css
/* Night Mode Overrides */
html[data-bg="night"] {
  color: #e2e8f0;
}

html[data-bg="night"] .glass {
  background: linear-gradient(135deg, rgba(2, 6, 23, 0.42), rgba(15, 23, 42, 0.22));
  border-color: rgba(148, 163, 184, 0.25);
  box-shadow: 
    0 16px 36px -10px rgba(0, 0, 0, 0.40),
    inset 0 1.5px 0.5px rgba(255, 255, 255, 0.15);
}

html[data-bg="night"] .liquid-btn {
  color: #f1f5f9 !important;
  background: rgba(15, 23, 42, 0.45) !important;
  border-color: rgba(148, 163, 184, 0.25) !important;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.30), inset 0 1px 0.5px rgba(255, 255, 255, 0.15) !important;
}
```

---

## 5. Strict Anti-Patterns (严格禁忌清单)

<anti_patterns>
When generating code under this skill, DO NOT:
1. ❌ **DO NOT use flat opacity without specular highlight**: Never write `background: rgba(255, 255, 255, 0.2)` without `inset 0 1.5px 0.5px rgba(255, 255, 255, 0.9)`. The specular highlight is what makes it look like real glass!
2. ❌ **DO NOT use solid flat colors for colored cards**: Never set `background: #3b82f6`. Always use the `color-mix` jelly formula with white highlights and dark refraction bottom bevels.
3. ❌ **DO NOT use linear or generic easings**: Never use `ease` or `linear` for card hover/dialog pops. Always use the spring curve `cubic-bezier(0.34, 1.56, 0.64, 1)`.
4. ❌ **DO NOT use harsh black drop-shadows on white glass**: Real glass casts colored or diffused shadows, never a muddy `0 4px 10px #000`. Use dual-layer slate/indigo ambient shadows (`rgba(42, 65, 105, 0.08)`).
5. ❌ **DO NOT nest heavy backdrop-filters**: In lists or tables with hundreds of cells, apply blur to the parent container, not each individual cell (to prevent GPU memory exhaustion on mobile devices).
</anti_patterns>

---

## 6. Implementation Checklist for Claude & Codex

Before returning code to the user, verify:
- [ ] Top specular highlight (`inset 0 1.5px 0.5px rgba(...)`) is present on all glass surfaces.
- [ ] Bottom refraction bevel (`inset 0 -1px 1px ...`) is included.
- [ ] Dual-layer soft ambient shadow (`--ambient-glow-shadow`) is configured.
- [ ] Jelly cards use `color-mix(in srgb, var(--color) ...)` for translucent depth.
- [ ] Fluid sweep (`::before` skew sweep) is added on interactive cards.
- [ ] Micro-interactions use bouncy spring curve `cubic-bezier(0.34, 1.56, 0.64, 1)`.
- [ ] Text inside translucent cards includes subtle drop-shadow (`text-shadow: 0 1px 2px rgba(0,0,0,0.35)`).
- [ ] Rounded corners are generous (24px~28px for containers, 30em for capsules).
