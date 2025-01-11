# me0w00f-wiki

基于 VitePress 的文档站点

## 环境要求

开始之前，请确保已安装以下软件：
- Node.js（推荐使用 LTS 版本）
- npm 或 yarn

## 快速开始

1. 克隆仓库：
```bash
git clone https://github.com/me0w00f/me0w00f-wiki.git
cd me0w00f-wiki
```

2. 安装依赖：
```bash
npm install
# 或者使用 yarn
yarn
```

## 开发指南

启动开发服务器：
```bash
npm run docs:dev
# 或者
yarn docs:dev
```

开发服务器将在 `http://localhost:8080` 启动

## 生产环境构建

构建生产环境版本：
```bash
npm run docs:build
# 或者
yarn docs:build
```

预览生产环境构建：
```bash
npm run docs:preview
# 或者
yarn docs:preview
```

## 项目结构

```
me0w00f-wiki/
├── .vitepress/          # VitePress 配置目录
│   ├── config/         # 配置文件
│   ├── theme/         # 主题自定义
│   └── cache/         # 构建缓存
├── docs/              # 文档内容
└── node_modules/      # 依赖包
```
## 如何创建或修改栏目
在`docs`创建对应md文件，然后在`zh.ts`按照其他栏目写法创建或修改。