---
name: liquid-glass-ui
description: |
  Professional Liquid Glassmorphism & Crystal Jelly Design System with extreme optical transparency. Use when:
  (1) Designing, creating, or refactoring web interfaces with ultra-clear liquid glass or crystal jelly aesthetics
  (2) Implementing transparency hierarchies (3.5%~14% ultra-clear glass surfaces over live video wallpapers or ambient canvases)
  (3) Preventing milky/cloudy flat blur defects and enforcing correct backdrop-filter segregation (container vs modal)
  (4) Responding to requests for '液态毛玻璃', '透明度', '高透玻璃', '果冻水晶', '磨砂玻璃', '玻璃拟态', 'liquid glass', 'glassmorphism', or 'jelly crystal'
  Compatible with: Claude (Claude Code, Claude 3.5/3.7 Sonnet), Codex (OpenAI Codex, GPT-4o, Cursor, Copilot)
---

# Liquid Glass UI - Physical Optical Ultra-Clear Glassmorphism & Crystal Jelly Design System

<system_role>
You are an expert UI/UX and Frontend Architect specialized in physical optical glassmorphism (液态全透明毛玻璃) and crystal jelly styling (果冻水晶质感).
Transparency is the supreme visual signature of this design system: it is NOT a milky frosted block, but an ultra-clear optical lens that lets dynamic backgrounds (video wallpapers and ambient light blobs) shine through with crisp clarity.
When this skill is activated, you MUST strictly adhere to the transparency hierarchy, optical tokens, backdrop-filter rules, and anti-patterns defined below.
</system_role>

---

## 1. The Transparency Doctrine (核心透明度哲学与物理透光法则)

### 1.1 Ultra-Clear Lens vs. Frosted Popup (超清透镜 vs 磨砂浮层)
The single biggest mistake in glassmorphism is applying `backdrop-filter: blur(...)` and high-opacity white fills indiscriminately to containers. In Liquid Glass UI:

- **Main Board & Containers (`.glass`, `.shell`, `.grid`, `.cell`, `.course`) MUST BE `backdrop-filter: none;`!**
  The background consists of a live dynamic video wallpaper (`.video-wallpaper`) and colorful ambient light blobs (`.ambient-canvas`). 
  If you blur the containers, the dynamic background becomes an indistinguishable foggy soup.
  Instead, containers act as **high-refractive optical glass (Gorilla Glass / Optical Quartz)**: 
  defined strictly by **extremely low opacity fills (3.5% ~ 14%)**, **razor-sharp top specular highlights (`inset 0 1.5px 0.5px rgba(255,255,255,0.9)`)**, and **crisp semi-transparent borders (`rgba(255,255,255,0.55)`)**.
- **Modals & Overlays ONLY (`.modal`, `.backdrop`, `.toast`) use `backdrop-filter: blur(...)`!**
  Only temporary overlay popups blur the content beneath to focus user attention.

---

### 1.2 The 7-Level Transparency Hierarchy (透明度阶梯谱系)

| 层级 | 不透明度范围 | 对应元素与 CSS 取值 | 光学物理意图 |
| :--- | :--- | :--- | :--- |
| **L0: 晶透基底 (Clear Pass-Through)** | **0% ~ 1.5%** | `background: transparent;`<br>`.cell: rgba(255, 255, 255, 0.015);` | 零阻碍透光，让底层的 4K 视频壁纸与动态流体光晕 100% 毫无遮挡地透射出来 |
| **L1: 微光骨架 (Subtle Ribs)** | **3.5% ~ 8%** | `.glass` 腹地中心: `rgba(255, 255, 255, 0.035)`<br>`--grid-section-bg: 0.04`<br>`--grid-corner-bg: 0.06`<br>`--grid-day-bg: 0.08` | 用微弱的白雾光感勾勒出网格经纬线与容器腹地，形成若隐若现的空间分割 |
| **L2: 交互轻触 (Touch Sheen)** | **10% ~ 14%** | `.glass` 边缘底色: `0.08 ~ 0.14`<br>`--grid-cell-hover-bg: 0.14`<br>`.bg-mode-selector: 0.12`<br>`.night-mode-button: 0.14` | 鼠标悬浮格或次级控制胶囊的轻透反馈，不破坏底层通透感 |
| **L3: 实体胶囊 (Capsule Controls)** | **10% ~ 28%** | `.uiverse-button: linear-gradient(135deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.10) 100%)` | 按钮与功能按键，形成略有实体感的晶体胶囊 |
| **L4: 琉璃边界 (Bevel Borders)** | **35% ~ 55%** | `--grid-border-color: rgba(255, 255, 255, 0.38)`<br>`--liquid-glass-border: rgba(255, 255, 255, 0.55)`<br>`.crystal-card border: 0.35 ~ 0.85` | 极细（1px）半透明白色边界，在全透表面形成轮廓折射防漏光 |
| **L5: 顶级微棱高光 (Specular Peak)** | **88% ~ 95%** | `--specular-highlight: inset 0 1.5px 0.5px rgba(255, 255, 255, 0.90)` | **核心灵魂**：只有顶部 1.5px 的极细棱角使用近乎纯白的 90% 不透明度，如同钻石切面的锐利反光 |
| **L6: 浮层阻断 (Modal Obscuration)** | **60% ~ 82%** | `.modal: rgba(255, 255, 255, 0.78 ~ 0.82)`<br>`backdrop-filter: blur(36px) saturate(180%)` | 仅弹窗与输入框使用，阻断背景噪音，保证表单文字最高可读性 |

---

## 2. Accurate Design Tokens (精准变量体系)

### Vanilla CSS Tokens (`:root`)
```css
:root {
  /* 1. 默认：超清全透光学玻璃规范 (Ultra-Clear Transparent Glass) */
  --liquid-glass-bg: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.22) 0%,
    rgba(255, 255, 255, 0.04) 50%,
    rgba(255, 255, 255, 0.10) 100%
  );
  --liquid-glass-border: rgba(255, 255, 255, 0.55);

  /* 2. 顶级物理高光与底部折射 (极其精细的亚像素微棱) */
  --specular-highlight: inset 0 1.5px 0.5px rgba(255, 255, 255, 0.90);
  --refraction-shadow: inset 0 -1px 1px rgba(170, 192, 224, 0.18);

  /* 3. 空气感弱环境光柔影 (绝不用死黑，仅 4%~8% 的冷青投影) */
  --ambient-glow-shadow: 
    0 16px 36px -10px rgba(42, 65, 105, 0.08),
    0 6px 16px -4px rgba(42, 65, 105, 0.04);

  /* 4. 网格与表头精细透明度变量 (核心透光阶梯) */
  --grid-border-color: rgba(255, 255, 255, 0.38);
  --grid-corner-bg: rgba(255, 255, 255, 0.06);
  --grid-day-bg: rgba(255, 255, 255, 0.08);
  --grid-section-bg: rgba(255, 255, 255, 0.04);
  --grid-cell-bg: transparent;
  --grid-cell-hover-bg: rgba(255, 255, 255, 0.14);

  /* 5. 动效曲线 (弹性物理曲线) */
  --spring-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  --smooth-easing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 3. Four Background Modes & Transmission Tuning (4 种模式透明度调校)

通过在 `<html>` 或 `<body data-bg="...">` 切换模式，精细调节透光率：

### Mode 1: `transparent` (超清全透模式 - 默认)
* **透明度表现**：腹地仅 **4%** 白色微光，**100% 透显**背景动态壁纸与氛围球。
* **背景配置**：`body { background: transparent; }`，`.ambient-canvas { opacity: 0.82; }`。
* **适用场景**：视频壁纸、动态流体背景、全息晶莹质感。

### Mode 2: `aurora` (流体极光模式)
* **透明度表现**：提高白度（18% ~ 52%），背景注入淡蓝极光径向光晕。
* **Token 调校**：
  ```css
  :root[data-bg="aurora"] {
    --liquid-glass-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.52) 0%, rgba(255, 255, 255, 0.18) 45%, rgba(236, 244, 255, 0.30) 100%);
    --liquid-glass-border: rgba(255, 255, 255, 0.72);
    --grid-border-color: rgba(255, 255, 255, 0.45);
    --grid-cell-bg: rgba(255, 255, 255, 0.05);
    --grid-cell-hover-bg: rgba(255, 255, 255, 0.22);
    --ambient-glow-shadow: 0 24px 50px -12px rgba(42, 65, 105, 0.13), 0 10px 20px -6px rgba(42, 65, 105, 0.07);
  }
  ```

### Mode 3: `frosted` (柔和磨砂微白模式)
* **透明度表现**：较高白度（30% ~ 68%），雾面漫反射，强化高密度文字的可读性。
* **Token 调校**：
  ```css
  :root[data-bg="frosted"] {
    --liquid-glass-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.68) 0%, rgba(255, 255, 255, 0.30) 50%, rgba(240, 246, 255, 0.42) 100%);
    --liquid-glass-border: rgba(255, 255, 255, 0.82);
    --grid-border-color: rgba(255, 255, 255, 0.55);
    --grid-cell-bg: rgba(255, 255, 255, 0.08);
    --grid-cell-hover-bg: rgba(255, 255, 255, 0.28);
  }
  ```

### Mode 4: `night` (暗夜极客黑模式)
* **透明度表现**：维持高透光，底色切换为深青黑半透渐变（16% ~ 34%），视频壁纸亮度压低至 38%，高光转为微白。
* **Token 调校**：
  ```css
  html[data-bg="night"] .video-wallpaper {
    filter: brightness(0.38) saturate(0.82);
  }
  html[data-bg="night"] .glass {
    background: linear-gradient(135deg, rgba(2, 6, 23, 0.34), rgba(15, 23, 42, 0.16));
    border-color: rgba(148, 163, 184, 0.25);
  }
  html[data-bg="night"] .uiverse-button {
    background: rgba(15, 23, 42, 0.32) !important;
    border-color: rgba(148, 163, 184, 0.25) !important;
  }
  ```

---

## 4. Component Blueprints with Correct Optical Transparency (组件实战代码)

### Blueprint 1: Universal Ultra-Clear Container (`.glass`)
**CRITICAL**: `backdrop-filter: none !important`.
```css
.glass {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.14) 0%,
    rgba(255, 255, 255, 0.035) 52%,
    rgba(255, 255, 255, 0.08) 100%
  );
  border: 1px solid var(--liquid-glass-border);
  box-shadow: 
    var(--ambient-glow-shadow), 
    var(--specular-highlight), 
    var(--refraction-shadow);
  border-radius: 24px;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}
```

---

### Blueprint 2: Grid Cells with Near-Zero Opacity (`.schedule`, `.grid`, `.cell`)
```css
.schedule {
  border-radius: 30px;
  overflow: auto;
  position: relative;
  z-index: 1;
}

.grid {
  display: grid;
  grid-template-columns: 58px repeat(7, minmax(0, 1fr));
  width: 100%;
}

.corner, .day, .section, .cell {
  border-right: 1px solid var(--grid-border-color);
  border-bottom: 1px solid var(--grid-border-color);
}

.corner {
  background: var(--grid-corner-bg); /* 6% */
}

.day {
  background: var(--grid-day-bg);    /* 8% */
  backdrop-filter: none;
}

.section {
  background: var(--grid-section-bg); /* 4% */
}

/* 单元格：仅 1.5% 微弱底色，悬浮时 14% */
.cell {
  background: rgba(255, 255, 255, 0.015);
  transition: background 0.2s ease;
}

.cell:hover {
  background: var(--grid-cell-hover-bg); /* 14% */
}
```

---

### Blueprint 3: Crystal Jelly Card with Translucent Gradient (`.course`, `.crystal-card`)
**CRITICAL**: Notice that the 3rd stop blends into `transparent`! It does NOT block the glass behind it!
```css
.crystal-card {
  --theme-color: #38bdf8; /* Dynamic color variable */
  
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  padding: 6px 8px;
  cursor: pointer;
  color: #ffffff;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
  
  /* 果冻核心：顶部白光透染 -> 中间半透彩色 -> 底部完全透明衰减 */
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--theme-color) 68%, rgba(255, 255, 255, 0.85)) 0%,
    color-mix(in srgb, var(--theme-color) 78%, rgba(255, 255, 255, 0.20)) 50%,
    color-mix(in srgb, var(--theme-color) 88%, transparent) 100%
  );
  
  /* 琉璃微晶半透边框 */
  border: 1px solid color-mix(in srgb, var(--theme-color) 35%, rgba(255, 255, 255, 0.85));
  
  /* 光学立体投影 */
  box-shadow:
    0 8px 20px -3px color-mix(in srgb, var(--theme-color) 32%, transparent),
    0 4px 10px -2px color-mix(in srgb, var(--theme-color) 20%, transparent),
    inset 0 1.5px 0.5px rgba(255, 255, 255, 0.88),
    inset 0 -1px 1px color-mix(in srgb, var(--theme-color) 80%, black 20%);
    
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.25s ease;
}

/* 倾斜扫光通道 */
.crystal-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -80%;
  width: 55%;
  height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.32) 50%, transparent 100%);
  transform: skewX(-25deg);
  pointer-events: none;
  transition: left 0.65s cubic-bezier(0.4, 0, 0.2, 1);
}

.crystal-card:hover {
  transform: translateY(-2px) scale(1.02);
  filter: brightness(1.05);
  box-shadow:
    0 14px 28px -2px color-mix(in srgb, var(--theme-color) 45%, transparent),
    0 6px 14px -2px color-mix(in srgb, var(--theme-color) 28%, transparent),
    inset 0 2px 0.8px rgba(255, 255, 255, 0.95);
  z-index: 3;
}

.crystal-card:hover::before {
  left: 145%;
}

.crystal-card:active {
  transform: translateY(0) scale(0.98);
}

.crystal-card .title {
  font-weight: 600;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.35); /* 半透彩色晶体上的文字必须有微阴影 */
}
```

---

### Blueprint 4: Deep-Blur Modal & Backdrop (仅此一处使用高模糊遮罩)
```css
.backdrop {
  position: fixed;
  inset: 0;
  z-index: 50;
  display: grid;
  place-items: center;
  padding: 18px;
  background: radial-gradient(circle at 50% 50%, rgba(15, 23, 42, 0.25) 0%, rgba(15, 23, 42, 0.42) 100%);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  animation: backdrop-in 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal {
  width: min(520px, 100%);
  max-height: 90vh;
  overflow: auto;
  padding: 26px;
  border-radius: 28px;
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.78) 0%,
    rgba(244, 248, 255, 0.62) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.85);
  box-shadow:
    0 30px 60px -12px rgba(25, 35, 60, 0.24),
    0 14px 24px -6px rgba(25, 35, 60, 0.12),
    inset 0 2px 0.8px rgba(255, 255, 255, 0.98),
    inset 0 -1.5px 1px rgba(180, 200, 230, 0.30);
  backdrop-filter: blur(36px) saturate(180%);
  -webkit-backdrop-filter: blur(36px) saturate(180%);
  animation: modal-pop 0.32s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal input, .modal select {
  width: 100%;
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.68);
  padding: 12px 14px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
```

---

## 5. Strict Transparency Anti-Patterns (透明度硬性禁忌)

<anti_patterns>
When generating code under this skill, DO NOT:
1. ❌ **严禁在主容器（`.glass`, `.schedule`, `.grid`）上滥用 `backdrop-filter: blur(...)`**：模糊会让底层高清动态视频壁纸变成一团灰蒙蒙的色块。必须保持 `backdrop-filter: none;`，靠 3.5%~14% 极低不透明度与顶部 1.5px 微棱高光展现质感。
2. ❌ **严禁将面板底色不透明度写超过 25%**：写出类似 `rgba(255, 255, 255, 0.6)` 的容器面板是灾难，会彻底丧失“超清高透”的晶莹感。
3. ❌ **严禁将网格单元格设为实体色**：`.cell` 必须保持 `transparent` 或极限的 `rgba(255, 255, 255, 0.015)`。
4. ❌ **严禁使用实心纯色卡片**：彩色果冻卡片必须使用 `color-mix` 与白光、透明度混合，第 3 个渐变断点必须包含 `transparent` 衰减。
5. ❌ **严禁使用生硬的纯黑阴影**：阴影必须采用双层冷调弥散投影（`rgba(42, 65, 105, 0.08)`），保持空气通透。
</anti_patterns>

---

## 6. Implementation Checklist for Claude & Codex

Before returning code to the user, verify:
- [ ] 容器面板 `.glass` 是否保持 `backdrop-filter: none;` 并维持 3.5%~14% 极限透明度？
- [ ] 顶部是否具备 1.5px 的锐利纯白微棱高光 (`inset 0 1.5px 0.5px rgba(255, 255, 255, 0.9)`)？
- [ ] 底部是否具备微折射阴影 (`inset 0 -1px 1px rgba(170, 192, 224, 0.18)`)？
- [ ] 网格单元格是否为几乎全透 (`background: rgba(255, 255, 255, 0.015)`)？
- [ ] 果冻彩色卡片是否通过 `color-mix` 混合并在底部向 `transparent` 衰减渐变？
- [ ] `backdrop-filter: blur(...)` 是否仅严格限制在 Modal 弹窗及遮罩层？
- [ ] 暗夜模式下是否依然维持半透质感与视频壁纸降暗？
