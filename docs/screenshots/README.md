# 📸 项目截图指南

## 当前状态

由于项目部署在服务器环境，无法直接生成浏览器截图。请按以下步骤添加截图：

---

## 🖥️ 方案 A：本地运行后截图（推荐）

### 1. 克隆项目
```bash
git clone https://github.com/zui-S/saas-dashboard.git
cd saas-dashboard
```

### 2. 安装依赖
```bash
npm install
```

### 3. 配置环境变量
```bash
cp .env.example .env.local
# 编辑 .env.local 填入配置
```

### 4. 启动开发服务器
```bash
npm run dev
```

### 5. 访问并截图
访问 http://localhost:3000，截取以下页面：

#### 必需截图清单：

1. **首页 (Home Page)**
   - 文件名：`01-homepage.png`
   - 内容：英雄区域 + 功能特性展示
   - 尺寸：1920x1080

2. **登录页面 (Sign In)**
   - 文件名：`02-signin.png`
   - 内容：Clerk 登录表单
   - 尺寸：1920x1080

3. **仪表盘首页 (Dashboard)**
   - 文件名：`03-dashboard-overview.png`
   - 内容：数据概览 + 图表
   - 尺寸：1920x1080

4. **数据可视化 (Analytics)**
   - 文件名：`04-analytics.png`
   - 内容：收入图表 + 用户统计
   - 尺寸：1920x1080

5. **订阅管理 (Billing)**
   - 文件名：`05-billing.png`
   - 内容：订阅计划 + 支付信息
   - 尺寸：1920x1080

6. **定价页面 (Pricing)**
   - 文件名：`06-pricing.png`
   - 内容：三个价格卡片
   - 尺寸：1920x1080

---

## 🎨 方案 B：使用 Mock 截图工具

### 推荐工具：

1. **shots.so** (免费)
   - 访问：https://shots.so
   - 上传代码截图
   - 添加精美边框

2. **mockuphone** (免费)
   - 访问：https://mockuphone.com
   - 手机/平板/电脑框架

3. **Cleanshot** (Mac, 付费)
   - 专业截图工具
   - 自动标注

---

## 📐 截图尺寸规范

| 用途 | 尺寸 | 格式 |
|------|------|------|
| README 展示 | 1920x1080 | PNG |
| GitHub 预览 | 1200x630 | PNG |
| 社交媒体 | 1200x675 | PNG |

---

## 🖼️ 截图命名规范

```
docs/screenshots/
├── 01-homepage.png          # 首页
├── 02-signin.png            # 登录页
├── 03-dashboard-overview.png # 仪表盘
├── 04-analytics.png         # 数据分析
├── 05-billing.png           # 订阅管理
└── 06-pricing.png           # 定价页面
```

---

## 🎯 截图要点

### 首页截图要点：
- ✅ 显示完整的导航栏
- ✅ 英雄区域标题清晰
- ✅ "Start Free Trial" 按钮可见
- ✅ 功能特性部分展示

### 仪表盘截图要点：
- ✅ 侧边栏导航可见
- ✅ 数据图表清晰
- ✅ 用户头像/菜单可见
- ✅ 响应式布局正常

### 定价页面截图要点：
- ✅ 三个价格卡片完整显示
- ✅ "Most Popular" 标签可见
- ✅ 功能列表清晰
- ✅ CTA 按钮明显

---

## 📤 上传截图到 GitHub

### 方法 1：直接上传
1. 打开 GitHub 仓库
2. 进入 `docs/screenshots` 文件夹
3. 点击 "Upload files"
4. 拖拽截图文件
5. Commit changes

### 方法 2：Git 推送
```bash
git add docs/screenshots/*.png
git commit -m "📸 Add project screenshots"
git push
```

---

## 🎨 截图美化建议

1. **统一风格**
   - 所有截图使用相同浏览器窗口大小
   - 保持一致的缩放比例

2. **突出亮点**
   - 用红框标注关键功能
   - 添加箭头指示重要元素

3. **去除敏感信息**
   - 模糊化真实数据
   - 删除个人账号信息

4. **添加说明**
   - 在 README 中为每张截图添加简短说明
   - 标注使用的技术栈

---

## ✅ 检查清单

上传前检查：
- [ ] 所有截图清晰可读
- [ ] 文件名符合规范
- [ ] 无敏感信息泄露
- [ ] 尺寸统一（1920x1080）
- [ ] 格式为 PNG
- [ ] 文件大小 < 2MB/张

---

## 📞 需要帮助？

联系：ginoshaw1991@hotmail.com
