# Liquid Glass UI (液态毛玻璃与果冻水晶设计系统)

<p align="center">
  <b>物理拟真光学质感与流体动效设计系统 · 适配 Claude Code 与 OpenAI Codex 的专用 Agent Skill</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Compatibility-Claude%20%7C%20Codex%20%7C%20Cursor-blue?style=flat-square" alt="Compatibility" />
  <img src="https://img.shields.io/badge/CSS-Vanilla%20%2B%20Tailwind%203%2F4-sky?style=flat-square" alt="CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
</p>

---

## ✨ 核心亮点 (Why Liquid Glass UI?)

传统的毛玻璃效果（Glassmorphism）往往只是生硬地设置 `background: rgba(255,255,255,0.2); backdrop-filter: blur(10px)`，在复杂背景下显得灰白、廉价且失去层次。

**Liquid Glass UI** 提取自真实物理光学规律，由**四重物理光学层**构建而成：

1. 💎 **顶部微棱高光（Specular Highlight）**：`inset 0 1.5px 0.5px rgba(255, 255, 255, 0.9)`，模拟光线射入玻璃边缘的极细锐利切面；
2. 🌊 **底部微折射微阴影（Refraction Shadow）**：`inset 0 -1px 1px rgba(170, 192, 224, 0.18)`，刻画玻璃物理厚度与底层反光遮挡；
3. 🍃 **双层空气感弥散阴影（Ambient Glow Shadow）**：近景弱投影 + 大范围冷色弥散虚化，消除生硬黑影，营造真实悬浮感；
4. 🍇 **果冻水晶渐变（Color-Mix Jelly）**：通过现代 CSS `color-mix(in srgb, ...)` 动态混合白光与主题色，使彩色卡片呈现出果冻气泡般的通透润泽感。

---

## 🚀 安装指南 (Installation as Skill)

### 1. 为 Claude Code CLI 安装
在终端中克隆或直接将 `SKILL.md` 放置在全局技能目录：
```bash
# 全局安装 (所有项目通用)
mkdir -p ~/.claude/skills/liquid-glass-ui
curl -o ~/.claude/skills/liquid-glass-ui/SKILL.md https://raw.githubusercontent.com/yee211/liquid-glass-ui/main/SKILL.md

# 或项目级安装
mkdir -p .claude/skills/liquid-glass-ui
curl -o .claude/skills/liquid-glass-ui/SKILL.md https://raw.githubusercontent.com/yee211/liquid-glass-ui/main/SKILL.md
```

### 2. 为 Cursor / VS Code (Claude 3.5/3.7 / GPT-4o) 安装
在你的项目根目录创建 `.cursor/rules/liquid-glass-ui.mdc`，并填入本仓库的 [`SKILL.md`](./SKILL.md) 内容。

### 3. 为 Claude.ai 网页版 / Claude Desktop 安装
在 Projects（项目）中打开 **Project Knowledge（项目知识库）**，直接上传 [`liquid-glass-ui.md`](./liquid-glass-ui.md) 文件。

---

## 🎨 核心 Token 快速接入

### 原生 CSS 变量 (`tokens.css`)
```css
:root {
  --liquid-glass-bg: linear-gradient(135deg, rgba(255, 255, 255, 0.22) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.10) 100%);
  --liquid-glass-border: rgba(255, 255, 255, 0.55);
  --specular-highlight: inset 0 1.5px 0.5px rgba(255, 255, 255, 0.9);
  --refraction-shadow: inset 0 -1px 1px rgba(170, 192, 224, 0.18);
  --ambient-glow-shadow: 0 16px 36px -10px rgba(42, 65, 105, 0.08), 0 6px 16px -4px rgba(42, 65, 105, 0.04);
  --blur-filter: blur(24px) saturate(180%) contrast(102%);
  --spring-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

### Tailwind CSS 配置 (`tailwind.config.js`)
```javascript
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'liquid-glow': '0 16px 36px -10px rgba(42, 65, 105, 0.08), 0 6px 16px -4px rgba(42, 65, 105, 0.04)',
        'specular': 'inset 0 1.5px 0.5px rgba(255, 255, 255, 0.9)',
        'refraction': 'inset 0 -1px 1px rgba(170, 192, 224, 0.18)',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }
    }
  }
};
```

---

## 📦 组件蓝图与目录结构

```text
liquid-glass-ui/
├── SKILL.md            # 完整 Skill 定义与执行约束（YAML frontmatter + XML 语义）
├── liquid-glass-ui.md  # 平铺单文件版本（便于直接粘贴或单文件规则加载）
├── css/
│   └── tokens.css      # 开箱即用的 CSS 变量与全套模式适配 (全透/极光/磨砂/暗夜)
├── tailwind.config.js  # Tailwind CSS 扩展配置
└── README.md           # 说明文档
```

---

## 📄 License
[MIT License](./LICENSE)
