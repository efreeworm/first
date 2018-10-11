## <center>采用前、后端分离模式的用户注册登录DEMO说明</center>


- **本次DEMO用到的技术或框架**    

    - 后端基于Node.js技术 
        - `Node.js` 是一个基于 Chrome V8 引擎的 JavaScript 运行环境 
        - `Express` 基于 Node.js 平台，快速、开放、极简的 Web 开发框架 
        - `Axios` Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中
        - `Body-parser` 是一个HTTP请求体解析中间件，使用这个模块可以解析JSON、Raw、文本、URL-encoded格式的请求体，Express框架中就是使用这个模块做为请求体解析中间件。
    - 前端采用Vue技术
        - `Element` 一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库
        - `Axios` 同上，用请求接口数据
    - 数据库
        - MongoDB `mongoose` 
    - 接口采用RESTful风格
        - REST 指的是一组架构约束条件和原则。满足这些约束条件和原则的应用程序或设计就是 RESTful。
    - 开发语言
        - JavaScript、HTML、CSS
&nbsp;

-  **当前大部分程序的系统架构，采用B/S架构的方式开发这种系统应用**
    - 本例的前端部分对应Browser，后端对应Server
    ```sequence
    Title:登录过程 B/S架构
    Browser->Server: 用户登录页面输入网址
    Server-->Browser: 返回登陆页面内容
    Browser->Server: 提交账号密码
    Server->Database: 根据账号密码获取用户信息
    Database->Database: 检索数据符合条件返回用户信息，\n否则返回空
    Database-->Server: 返回用户信息
    Server-->Browser: 跳转登录成功页面
    ```

- **安装部署相关**
    - Nginx
    - Docker模式
    - 本机模式 
&nbsp;
- **前端相关技术**
    - 前端
        - Bootstrap、Vue、React、Angularjs、JQuery、Webpack
        - Html5、css3、es6
&nbsp;
- **开发内容**
    - 投票
    - 商品交易
    - 积分转账