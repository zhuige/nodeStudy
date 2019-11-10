const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/ljj', (ctx, next) => {
    ctx.body = {name:'ljj'}
});

app.use(router.routes());

app.listen(3000);