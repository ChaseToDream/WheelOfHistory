此次合并创建了一个全新的历史时间线应用，使用React、TypeScript、Tailwind CSS和Zustand状态管理，实现了历史名人选择、可交互时间线和状态显示功能。项目结构完整，包含了所有必要的配置文件和组件。
| 文件 | 变更 |
|------|---------|
| package.json | - 初始化项目配置，添加React、TypeScript、Tailwind CSS等依赖<br>- 配置开发、构建、 lint 和预览脚本 |
| src/App.tsx | - 创建应用主组件，使用React Router实现路由导航<br>- 配置首页和关于页面路由<br>- 集成导航栏和主要组件 |
| src/components/Timeline.tsx | - 实现可交互时间线组件，支持拖拽、缩放功能<br>- 显示历史年份标记和当前年份指示器<br>- 根据选择的历史名人自动计算时间范围 |
| src/data/historicalFigures.ts | - 定义历史名人数据结构和类型<br>- 提供12位历史名人数据，包括科学家、艺术家、政治家等类别<br>- 包含人物名称、生卒年份、类别、描述和图像URL |
| src/components/CelebritySelector.tsx | - 实现历史名人选择组件<br>- 支持按类别筛选名人<br>- 提供多选功能 |
| src/components/CelebrityStatus.tsx | - 显示选中名人在当前年份的状态<br>- 根据年份计算名人年龄和生平阶段 |
| src/store/useTimelineStore.ts | - 使用Zustand创建状态管理store<br>- 管理选中的名人、当前年份等状态 |
| tailwind.config.js | - 配置Tailwind CSS主题和颜色 |
| vite.config.ts | - 配置Vite构建工具 |
| tsconfig.json | - 配置TypeScript编译选项 |
| index.html | - 创建应用HTML入口文件 |
| README.md | - 添加项目说明文档 |