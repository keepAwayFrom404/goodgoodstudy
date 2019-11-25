
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
    await page.goto('https://www.baidu.com', {
      waitUtil: "networkidle2"
    });
    await page.evaluate(async () => {
      window.name = '<div>hello world</div>' + "&&&" + 'aaa';
    });
  
    await page.screenshot({
      path: './public/abc.png',
      fullPage: true
    });
    await browser.close();
  })();
  