# Crawling

## node로도 크롤링이가능하지 않을까?

- 당연히! 가능했다. python이 크롤링으로 많이알려져 다른언어로는 좀 복잡해서그런건가? 다이유가있지않을까? 라는생각에 시도해보지않았었는데 라이브러리 몇개만 가져오면 너무나 손쉽게할 수 있었다

### 전체코드

```js
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
```

- 아주짤막한 코드로 구현이가능했다.

---

- cheerio 덕분에 우리가 불러온 url의 html문서를 JQuery문법을 사용하여 접근할 수 있도록 해준다.

```js
  await axios
    .get(url)
    .then((result) => {
        console.log(result.data); // result.data(string) => html문서를 통째로 string화 하여 전달받음
        const $ = cheerio.load(result.data); //html파일을 $에 담아서 jQuery 문법을 사용하여 접근할 수 있도록 해줌
    }
```

---

- jquery문법을 숙지해야한다.
- each는 선택자로 선택된 모든 태그들을 하나씩 둘러볼수있도록 해준다. 인자는 index,node 가 있다.
- 각node 는 다시한번 $(node) 로 감싸주어야하며. 활용하기위해서는 몇몇의 함수를 사용해야한다.

```js
load : 인자로 html 문자열을 받아 cheerio 객체를 반환합니다.
children : 인자로 html selector를 문자열로 받아 cheerio 객체에서 선택된 html 문자열에서 해당하는 모든 태그들의 배열을 반환합니다.
each : 인자로 콜백 함수를 받아 태그들의 배열을 순회 하면서 콜백함수를 실행합니다.
find : 인자로 html selector 를 문자열로 받아 해당하는 태그를 반환합니다.
```

```js
my.each((idx, data) => {
  arr.push($(data).text());
});
```

- 그리고 마지막으로 text()로 내부 텍스트를 추출해내면된다. html() 등 여러함수가있으나 쓸일이 없지싶다.
- 이런 기본사용법만가지고있다면 크롤링은끝이다. 더배울게없다! 끝!
