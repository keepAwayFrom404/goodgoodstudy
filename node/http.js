const http = require("http");
const fs = require("fs");

const documentUrl = "~/goodgoodstudy/";
const server = http.createServer((req, res) => {
  const url = req.url;

  const file = documentUrl + url;
  console.log(file);

  fs.readFile(file, (err, data) => {
    if (err) {
      res.write("404 hahahaha");
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});
server.listen(3000);
