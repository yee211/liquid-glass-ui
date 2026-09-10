# Liquid Glass UI (液态毛玻璃与果冻水晶设计系统)

<p align="center">
  <b>物理拟真超清光学质感 · 精准透明度阶梯谱系 · 适配 Claude Code 与 OpenAI Codex 的专用 Agent Skill</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Compatibility-Claude%20%7C%20Codex%20%7C%20Cursor-blue?style=flat-square" alt="Compatibility" />
  <img src="https://img.shields.io/badge/Transparency-Ultra--Clear-purple?style=flat-square" alt="Transparency" />
  <img src="https://img.shields.io/badge/CSS-Vanilla%20%2B%20Tailwind%203%2F4-sky?style=flat-square" alt="CSS" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
</p>

---

## 💎 为什么“透明度”是这套 UI 的第一生命线？

普通的毛玻璃常常会写成 `background: rgba(255,255,255,0.3); backdrop-filter: blur(20px)`。如果直接把这个模糊挂在大容器上，底层的动态 4K 视频壁纸或动态极光画布就会直接变成一团灰白的浓雾，彻底丧失通透感。

**Liquid Glass UI 严格区分了“超清高透面板”与“磨砂遮罩浮层”：**

1. **主容器与底板严禁使用 `backdrop-filter: blur`！**
   - 面板采用类似 Gorilla Glass 钢化光学玻璃的物理表现：**3.5% ~ 14% 的极限超低透明度底色**，底部的动态视频与极光 100% 毫无损耗地透射出来；
   - 依靠 **顶部 1.5px 纯白切面微棱高光 (`inset 0 1.5px 0.5px rgba(255,255,255,0.9)`)** 与 **精细半透明边框 (`rgba(255,255,255,0.55)`)** 勾勒物理轮廓。
2. **磨砂模糊滤镜（`backdrop-filter: blur`）严格限制在 Modal 弹窗浮层上！**
   - 只有弹窗浮层为了遮挡背景噪点、突出表单文本时，才开启 `blur(36px) saturate(180%)`。

---

## 📊 7 级透明度阶梯谱系 (Transparency Hierarchy)

| 层级 | 不透明度 | 典型应用元素 | 物理光学意图 |
| :--- | :--- | :--- | :--- |
| **L0: 晶透基底** | **0% ~ 1.5%** | `background: transparent;` / `.cell: 0.015` | 零阻碍透光，底层 4K 视频壁纸与流体光晕 100% 透射 |
| **L1: 微光骨架** | **3.5% ~ 8%** | `.glass` 腹地: `0.035` / 表头网格: `0.04 ~ 0.08` | 用极淡白雾光感勾勒出网格经纬线与容器腹地 |
| **L2: 交互轻触** | **10% ~ 14%** | 网格悬浮: `0.14` / 模式胶囊: `0.12` | 悬浮与轻量控件交互，绝不喧宾夺主 |
| **L3: 实体胶囊** | **10% ~ 28%** | `.uiverse-button` (按钮渐变) | 功能操作按键的轻实体胶囊质感 |
| **L4: 琉璃边界** | **35% ~ 55%** | `--liquid-glass-border: 0.55` / 网格线: `0.38` | 1px 细密微透白线，形成折射边界防漏光 |
| **L5: 顶级微棱高光** | **88% ~ 95%** | `inset 0 1.5px 0.5px rgba(255, 255, 255, 0.90)` | **核心灵魂**：顶部 1.5px 极细切面的纯白刀锋反光 |
| **L6: 浮层阻断** | **60% ~ 82%** | `.modal` (配合 `blur(36px)`) | 仅弹窗与输入框内部使用，保障表单可读性 |

---

## 🚀 安装与使用指南

### 1. 为 Claude Code CLI 安装
```bash
# 全局安装 (所有项目通用)
mkdir -p ~/.claude/skills/liquid-glass-ui
curl -sSL https://raw.githubusercontent.com/yee211/liquid-glass-ui/main/SKILL.md -o ~/.claude/skills/liquid-glass-ui/SKILL.md
```

### 2. 为 Cursor / VS Code (Claude 3.5/3.7 / GPT-4o) 安装
在项目根目录下创建 `.cursor/rules/liquid-glass-ui.mdc`，粘贴仓库的 [`SKILL.md`](./SKILL.md) 即可。

### 3. 为 Claude.ai 网页版 / Claude Desktop 安装
直接将 [`liquid-glass-ui.md`](./liquid-glass-ui.md) 上传到 Project Knowledge（项目知识库）中。

---

## 📄 License
[MIT License](./LICENSE)
