const axios = require("axios");
const cheerio = require("cheerio");

doit("http://spectory.net/contest");

async function doit(url) {
  await axios
    .get(url)
    .then((result) => {
      const arr = [];
      const $ = cheerio.load(result.data);
      const my = $("div .item-col");
      console.log(`result.data`, result.data);

      my.each((idx, data) => {
        arr.push($(data).text());
      });
      console.log(arr);
    })
    .catch((err) => console.log(err));
}
