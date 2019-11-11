const catchError = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    ctx.body = '服务器有点问题， 等一下';
  }
};

module.exports = catchError;
