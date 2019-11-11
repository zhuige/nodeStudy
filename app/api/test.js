const Router = require("koa-router");
const router = new Router();

router.get("/ljj", (ctx, next) => {
  ctx.body = {
    name: "蔡徐坤",
    music: "鸡你太美"
  };
});

module.exports = router;
