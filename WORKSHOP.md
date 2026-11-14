# 本地联合编辑

在 Visual Studio 中选择「文件 → 打开 → 文件夹」，打开本文件所在的 portfolio-workshop 文件夹。此网站是 HTML/CSS/JavaScript 静态站点，无需创建解决方案或重建项目。

- 仓库：https://github.com/jay-max-c/jay-max-c.github.io
- 工作分支：workshop/portrait-gaudi
- 起点：247a10d（接管时的 origin/main）
- index.html：页面结构与个人介绍
- style.css：首页肖像规则位于文件末尾
- script.js：作品资料与图库
- assets/projects/gaudi-*.webp：高迪方案展示页

## 一起修改

双方使用这个目录；每轮开始先保存编辑器里的文件，检查 Git Changes，再约定本轮修改文件，避免同时保存同一个文件。提交前查看差异并预览首页和项目弹窗。同步远端前先提交本地工作，再 fetch；有冲突时逐项合并，勿强制覆盖。

预览可直接打开 index.html，或在本目录运行 `python -m http.server 8765 --bind 127.0.0.1`（需要可用的 Python），访问 http://127.0.0.1:8765 。

完成审阅后，可推送此工作分支并通过 Pull Request 合入 main，沿用现有 GitHub Pages。当前尚未推送或修改线上发布设置。

旧目录 ../portfolio-site 保留原分支和全部未提交内容。新目录是同一仓库的 Git worktree，不要直接删除旧目录的 .git。

## 高迪资料核对

来源：用户本地「2026 高迪之声」目录中的《高迪之声 2026-杭州金沙湖大剧院.pdf》，共 6 页。网站采用第 1–3 页的压缩展示图，保留原页构图。

可确认：Sonoro Gaudí 2026、艺术/自然/乡土主题、剧院公共空间装置构想，以及展览、视听、演出等拟议活动。现阶段按概念方案展示。团队署名、个人职责、实施状态仍待用户核实；不把参考照片当作用户已完成作品。原始大体积 PDF、PPTX、视频未加入 Git。

## 验证记录

JavaScript 语法、Git 空白检查、图片引用检查通过。内置浏览器连接本地地址超时，尚未完成桌面/手机视觉验收。
