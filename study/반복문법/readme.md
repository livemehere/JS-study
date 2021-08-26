# 자주사용되는 반복문법

## forEach

- Array(배열)에만 사용가능
- 배열을 순회하면서 콜백함수를 반복시킬 수 있다
- 보통은 item인자만 사용하지만, 총3개의 인자가있다

```js
const arr = ["가", "나", "다", "라"];

arr.forEach((item, index, array) => {
  console.log(item);
  console.log(index);
  console.log(array);
});
// 가
// 0
// [ '가', '나', '다', '라' ]

// 나
// 1
// [ '가', '나', '다', '라' ]

// 다
// 2
// [ '가', '나', '다', '라' ]

// 라
// 3
// [ '가', '나', '다', '라' ]
```

## for...in

- Object(객체)에만 사용가능
- 객체의 key값을 가져올 수 있고, key값을 이용해서 value를 뽑아낼 수 있다
- 하지만 array도 객체라는것! 배열의 key는 0~.. 인덱싱이다

```js
const arr = ["가", "나", "다", "라"];

for (let key in arr) {
  console.log(`${key} : ${arr[key]}`);
}
// 0 : 가
// 1 : 나
// 2 : 다
// 3 : 라

const obj = {
  a: "가",
  b: "나",
  c: "다",
};

for (let key in obj) {
  console.log(`${key} : ${obj[key]}`);
}
// a : 가
// b : 나
// c : 다
```

## for...of

- ES6에서 추가된문법으로 객체가 Symbol.iterator 속성을 가지고 있어야한다

```js
const arr = ["가", "나", "다", "라"];

for (let value of arr) {
  console.log(value);
}
// 가
// 나
// 다
// 라
```
