// index:

module.exports = {
    'GET /': async (ctx, next) => {
    	await next();
        ctx.render('index.html');
    },
    'GET /login': async (ctx, next) => {
    	await next();
        ctx.render('login.html');
    },
    'GET /news': async (ctx, next) => {
    	await next();
        ctx.render('news.html');
    },
    'GET /Selfindex/:name': async (ctx, next) => {
        await next();
        var username = ctx.params.name;
        ctx.render('Selfindex.html',{username : username});
    },
    'GET /Selfinfo/:name': async (ctx, next) => {
        await next();
        var username = ctx.params.name;
        ctx.render('Selfinfo.html',{username : username});
    },
    'GET /news/:name': async (ctx, next) => {
        await next();
        var username = ctx.params.name;
        ctx.render('news.html',{username : username});
    }    
};






