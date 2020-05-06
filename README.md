# middle-platform-console-web

基于 [vue-element-admin](https://panjiachen.github.io/vue-element-admin) 模板开发

## 原型

http://192.168.16.97:8088/manageweb/start.html#id=u6nkpu&p=%E6%8E%A5%E5%8F%A3%E7%AE%A1%E7%90%86&g=1

## 设计

见[wiki](http://gitlab.sinohealth.cn/tsc-internal/middle-platform/frontend/middle-platform-console-web/wikis/home)

## 开发

```bash
# 克隆项目
git clone http://gitlab.sinohealth.cn/tsc-internal/middle-platform/frontend/middle-platform-console-web.git

# 进入项目目录
cd middle-platform-console-web

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 http://localhost:9527

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

更多信息请参考 [使用文档](https://panjiachen.github.io/vue-element-admin-site/zh/)

## Changelog

..

## Online Demo

在线 Demo: 待部署测试环境
