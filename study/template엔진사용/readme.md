# Nunjucks 사용하기

### Basic

```js
const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

nunjucks.configure("views", {
  autoescape: true, //text로 입력되는 html방지(보안)
  express: app, //서버
});

app.get("/", (req, res) => {
  const name = "kong";
  res.render("index.html", { name: name }); //render(html,obj) 두번째인자를통해서 데이터를 전달한다.
});

app.listen(3000);
```

## Render

- 두번째 인자로 같이 넘겨주는 데이터는 새로고침할때마다 업데이트가 되는데, html 파일같은경우 서버자체를 재실행해야 수정한게 적용이된다. react처럼 DOM을 감지하지않는다.

- 그래서 해결해보려했는데, 생각해보니까 그럴 필요가없었다. 사실상 templates 엔진은 디비와 연동해서 데이터를 동적으로 보여주는 역할을 하는데, 그외적인 요소들이 변동할일도 없고, 그런기능이 필요하다면 virtualDOM을 사용하는 React.js 나 Vue.js 를 사용하는게 맞는것 같다.
