const Koa = require("koa");
const app = new Koa();
const route = require("koa-route");
// const static = require("koa-static");
// const path = require("path");
// const home = static(path.join(__dirname), "/public/");

app.use(
  route.get("/", ctx => {
    ctx.response.body = "hello world";
  })
);

app.use(
  route.get("/get", ctx => {
    ctx.response.body = "i am a get request";
  })
);

app.listen(3000);
