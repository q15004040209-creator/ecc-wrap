# ECC Wrapper

<div align="center">

**[English](#english) · [中文说明](#中文说明)**

</div>

---

## English

### What is ECC Wrapper?

**ECC Wrapper** is a lightweight, production-ready JavaScript封装层 for the [ECC (Ember Claude Code)](https://github.com/affaan-m/ECC) — the hardest-native operator system for AI agent harness performance optimization.

> ECC is the超级热门 开源项目 with **208,779 ⭐ stars** and **+10,326 ⭐ this week**, powering Claude Code, Codex, Cursor, OpenCode, Gemini, Zed, GitHub Copilot, and more.

This wrapper provides a clean JavaScript API so you can integrate ECC's agent harness optimization capabilities into any Node.js workflow, automation pipeline, or custom tool — without cloning the full repository or managing shell scripts manually.

### Features

- **Token Optimization** — model selection, system prompt slimming, background processes
- **Memory Persistence** — hooks that auto-save/load context across sessions
- **Continuous Learning** — auto-extract patterns from sessions into reusable skills
- **Verification Loops** — checkpoint vs. continuous eval, grader types, pass@k metrics
- **Parallelization** — Git workflows, cascade method, when to scale instances
- **Subagent Orchestration** — the context problem, iterative retrieve pattern

### Installation

```bash
npm install ecc-wrap
```

### Quick Start

```javascript
const { ECC } = require('ecc-wrap');

// Initialize with your project
const ecc = new ECC({
  target: 'claude', // 'claude' | 'codex' | 'cursor' | 'opencode' | 'gemini'
  profile: 'standard',     // 'minimal' | 'core' | 'standard' | 'strict'
  projectPath: './my-project'
});

// List available agents
const agents = ecc.listAgents();
console.log('Available agents:', agents);

// Run a skill
const result = await ecc.runSkill('coding-standards', {
  file: './src/main.js',
  language: 'javascript'
});
console.log(result);

// Check system status
const status = ecc.status();
console.log('Memory:', status.memory, '| Active sessions:', status.sessions);

// Evolve learned patterns into skills
await ecc.evolve('session-123');
```

### API Reference

| Method | Description |
|---|---|
| `ECC.listAgents()` | List all 63 specialized subagents |
| `ECC.listSkills()` | List all 251 skills by domain |
| `ECC.listCommands()` | List all 79 legacy command shims |
| `ECC.runSkill(name, opts)` | Execute a skill with options |
| `ECC.runCommand(cmd, args)` | Run a CLI command (e.g. `/plan`) |
| `ECC.status()` | Get current memory/session/instant state |
| `ECC.evolve(sessionId)` | Cluster instant increments into skills |
| `ECC.setConfig(key, value)` | Configure runtime flags |

### Project Structure

```
ecc-wrap/
├── README.md
├── package.json
├── demo.js          # Full usage demo
└── src/
    ├── index.js     # Main entry
    ├── agents.js    # Agent registry
    ├── skills.js   # Skill loader
    └── ecc.js      # Core ECC bindings
```

### Requirements

- Node.js 18+
- ECC source (auto-fetched on first run, or supply `eccPath`)

### License

MIT · [Original ECC License](https://github.com/affaan-m/ECC/blob/main/LICENSE) · [Report Issue](https://github.com/q15004040209-creator/ecc-wrap/issues)

---

## 中文说明

### 什么是 ECC Wrapper？

**ECC Wrapper** 是 [ECC (Ember Claude Code)](https://github.com/affaan-m/ECC) 的轻量级 JavaScript 封装层。ECC 是面向 AI Agent 性能优化的最强原生操作系统的核心引擎。

> ECC 是超级热门开源项目，拥有 **208,779 ⭐ Star** 和 **本周 +10,326 ⭐**，为 Claude Code、Codex、Cursor、OpenCode、Gemini、Zed、GitHub Copilot 等主流 AI Agent 提供底层加速。

本封装提供干净的 JavaScript API，让你可以将 ECC 的 Agent 性能优化能力集成到任何 Node.js 工作流、自动化管道或自定义工具中——无需克隆完整仓库或手动管理 Shell 脚本。

### 核心能力

- **Token 优化** — 模型选择、系统提示压缩、后台进程管理
- **记忆持久化** — 跨会话自动保存/加载上下文
- **持续学习** — 从会话中自动提取模式，转化为可复用 Skills
- **验证循环** — 检查点 vs 连续评估、Grader 类型、pass@k 指标
- **并行化** — Git 工作流、级联方法、实例扩缩容策略
- **子 Agent 编排** — 上下文问题、迭代检索模式

### 安装

```bash
npm install ecc-wrap
```

### 快速上手

```javascript
const { ECC } = require('ecc-wrap');

const ecc = new ECC({
  target: 'claude',
  profile: 'standard',
  projectPath: './my-project'
});

// 列出可用 Agent
const agents = ecc.listAgents();
console.log('可用 Agents:', agents);

// 运行 Skill
const result = await ecc.runSkill('coding-standards', {
  file: './src/main.js',
  language: 'javascript'
});

// 查看系统状态
const status = ecc.status();
console.log('内存:', status.memory, '| 活跃会话:', status.sessions);

// 将学习到的模式演化为 Skills
await ecc.evolve('session-123');
```

### API 参考

| 方法 | 说明 |
|---|---|
| `ECC.listAgents()` | 列出全部 63 个专用子 Agent |
| `ECC.listSkills()` | 按领域列出全部 251 个 Skills |
| `ECC.listCommands()` | 列出全部 79 个兼容命令 |
| `ECC.runSkill(name, opts)` | 执行指定 Skill |
| `ECC.runCommand(cmd, args)` | 运行 CLI 命令（如 `/plan`）|
| `ECC.status()` | 获取当前内存/会话/实例状态 |
| `ECC.evolve(sessionId)` | 将增量聚合成 Skills |
| `ECC.setConfig(key, value)` | 配置运行时参数 |

### 项目结构

```
ecc-wrap/
├── README.md
├── package.json
├── demo.js          # 完整使用示例
└── src/
    ├── index.js     # 主入口
    ├── agents.js    # Agent 注册表
    ├── skills.js    # Skill 加载器
    └── ecc.js      # 核心 ECC 绑定
```

### 系统要求

- Node.js 18+
- ECC 源码（首次运行自动拉取，或通过 `eccPath` 指定）

### 开源许可

MIT · [原始 ECC 许可](https://github.com/affaan-m/ECC/blob/main/LICENSE) · [反馈问题](https://github.com/q15004040209-creator/ecc-wrap/issues)