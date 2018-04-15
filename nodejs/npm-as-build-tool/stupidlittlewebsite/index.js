var Koa = require("koa");
var app = new Koa();

module.exports = app;

app.use(function *() {
    this.body = "Koa says Hi!";
});

var port = process.env.PORT || (process.argv[2] || 3000);
app.listen(port);
console.log("Application started. Listening on port:" + port);

