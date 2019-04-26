// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
const controller = require('./controller')
const bodyParser = require('koa-bodyparser');
// 创建一个Koa对象表示web app本身:
const app = new Koa();
// 使用body解析器获取post请求的内容
app.use(bodyParser());
// 使用控制器将请求映射到对应的处理函数
app.use(controller());

// 对于任何请求，app将调用该异步函数处理请求：

// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');
