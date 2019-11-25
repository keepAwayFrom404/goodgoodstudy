const Koa = require("koa");
const route = require("koa-route");
const static = require("koa-static");
const bodyParser = require("koa-bodyparser");
const path = require("path");
const fs = require("fs");
// const execa = require("execa");
const { exec } = require("child_process");
const app = new Koa();
const images = static(path.join(__dirname) + "/public/");
app.use(bodyParser());
app.use(images);

app.use(
  route.post("/screenshot", async ctx => {
    const ws = fs.createWriteStream("./index.js", {
      encoding: "utf8"
    });
    const params = ctx.request.body;
    ws.write(createScreenshotFile(params));
    ws.end();
    ws.on("finish", async () => {
      try {
        await exec(
          `docker run --shm-size 1G --rm -v ~/goodgoodstudy/noHeadBrower:/app alekzonder/puppeteer:latest node index.js`
        );
        ctx.response.body = {
          code: 200,
          data: params.name + ".png"
        };
      } catch (err) {
        console.log("docker run error", err);
      }
    });
  })
);

function createScreenshotFile({ template, script, url, name } = params) {
  return `
  const puppeteer = require("puppeteer");
  (async () => {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();
    page.setViewport({
      width: 196,
      height: 99
    });
    await page.goto('${url}', {
      waitUtil: "networkidle2"
    });
    await page.evaluate(async () => {
      window.name = '${template}' + "&&&" + '${script}';
    });
  
    await page.screenshot({
      path: './public/${name}.png',
      fullPage: true
    });
    await browser.close();
  })();
  `;
}
app.listen(7777);
