// sign in:
module.exports = {
    'POST /signin': async (ctx, next) => {
        var data = {
            username : ctx.request.body.username || '',
            password : ctx.request.body.password || ''
        };
        if (data.username && data.password) {
            //存入数据库
            await next();
            ctx.response.body = data.username;
            console.log(data.username + " " + data.password);
        }else {
            ctx.reponse.body = `<h1>Login failed!</h1>`;
        }
    }
};
