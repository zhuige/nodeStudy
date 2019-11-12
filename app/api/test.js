const Router = require('koa-router');
const router = new Router();
const { PositiveIntegerValidator } = require('../validators/validator');
router.get('/ljj', (ctx, next) => {
    const v = new PositiveIntegerValidator().validate(ctx);
    // const error = new global.errs.ParameterException();
    // throw error;
    ctx.body = {
        name: '蔡徐坤',
        music: '鸡你太美'
    };
});

module.exports = router;
