# Multer 라이브러리를 이용한 파일 업로드

## 단일 파일받고, 파일명(확장자포함)랜덤값으로 저장

### index.html

- Multer은 파일업로드를 위해서 사용되는 multipart/form-data를 다루는것이기에 enctype을 반드시 이와같이!

```html
<form method="POST" action="/sendfile" enctype="multipart/form-data">
  <input type="file" name="myfile" />
  <input type="submit" />
</form>
```

### app.js

```js
const express = require("express");
const app = express();

const multer = require("multer"); //모듈 불러오기
const upload = multer({ dest: "uploads/" }); //저장할 장소설정

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html"); //form
});

app.post("/sendfile", upload.single("myfile"), (req, res) => {
  //경로와 middleware 사이에 새로운 middleware추가, form의 input name 이 'myfile'인것을 받아서 저장한다! 라는뜻
  res.send("done");
});

app.listen(3000);
```

---

### 업로드된 파일의 정보

```js
app.post("/sendfile", upload.single("myfile"), (req, res) => {
  res.send(req.file); //파일이름,인코딩,저장위치,경로,파일사이즈 등이 담겨있음
});
```

### Tip

- `express.static()`을 미들웨어로 등록하면, 해당 폴더의 파일에 접근이가능함.(파일만! 폴더안됨)
- 이것저것만져보면 이해가될것임!!

```js
app.use(express.static("study"));
```

- 그럼 접근하도록 해준다면, 프론트에서 접근하는 방법은?

```html
<img src="http://localhost:3000/uploads/h.png" alt="" />
```

### 여러개의 파일 업로드받기

```js
app.post("/sendfile", upload.array("myfile", 3), (req, res) => {
  // .single -> array 로바꾸고, 두번째인자로 최대받을갯수를 넣어주면됨. 초과시 에러발생함
  res.send(req.files); //그리고 req.file -> req.files 로 바뀜
});
```

- form에는 아래와같이 `multiple` 속성을 추가해줘야함

```html
<input type="file" name="myfile" multiple />
```

### 파일이름을 그대로 받기

- upload를 아래와같이 dest -> storage 방식으로 변경해주면됨. 저장소와,파일이름을 함께 다룰수있도록 되어있다.
- 변경가능한 부분들만 살펴보자면 uploads/ 부분을 변경하여 저장소를 바꿀수있을것이고, file.originalname부분을 취향껏 커스텀해도좋다. 만약 이름이곂친다면 덮어써버리기때문에 Timestamp를 추가하는것도 방법이다.

```js
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // new Date().getTime() + file.originalname
    },
  }),
});
```

### 업로드 최대갯수 한도초과에대한 에러처리는 어떻게하나요?

- 이경우 에러처리 미들웨어를 이후에 하나 생성해줘야한다( ~~해보진않았지만 async/await 으로 처리가능할지도?~~)

```js
app.post("/sendfile", upload.array("myfile", 3), (req, res) => {
  res.send(req.files);
});

app.use((err, req, res, next) => {
  if (err) {
    console.log("err!!!");
  }
  next();
});
```

---

> 240MB 짜리 동영상이 얼마만에 전송되나확인해봤는데 한 4~5분? 걸렸던거같다. 요즘영화가 보통 2기가 정도되니까 영화하나에...40분?.. 오바다 긴동영상은 그냥 토렌트쓰자!
