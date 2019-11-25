const axios = require("axios");

let params = {
  template: "<div>hello world</div>",
  script: "aaa",
  url: "https://www.baidu.com",
  name: "abc"
};
axios
  .post("http://127.0.0.1:7777/screenshot", params)
  .then(res => {
    console.log("done");
  })
  .catch(err => {
    console.log("error");
  });
