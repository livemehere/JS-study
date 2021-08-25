const axios = require("axios");
const cheerio = require("cheerio");

async function doit(url) {
  await axios
    .get(url)
    .then((result) => {
      const arr = [];
      //   console.log(result.data); // result.data(string) => html문서를 통째로 string화 하여 전달받음
      const $ = cheerio.load(result.data); //html파일을 $에 담아서 jQuery 문법을 사용하여 접근할 수 있도록 해줌
      //   console.log($); // function
      const my = $(
        ".ranking-product-item__content--wrap .production-item-price__price"
      );
      my.each((idx, data) => {
        arr.push($(data).text());
      });
      console.log(arr[2]);
    })
    .catch((err) => console.log(err));
}

doit("https://ohou.se/commerces/ranks");
