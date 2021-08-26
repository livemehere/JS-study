# 배열

```js
const arr = ["apple", "banana"];

// forEach는 인자가 3개였다!
arr.forEach((item, index, arr) => {
  console.log(item, index, arr); // apple 0 ['apple','banana']
});
```

```js
const arr = ["apple", "banana", "poo"];

arr.shift(); // 배열 앞에서 제거
arr.pop(); // 배열 뒤에서 제거
arr.unshift("hi"); // 배열앞에 추가

const idx = arr.indexOf("apple");
console.log(idx); // 0 배열의 인덱스찾기

arr.splice(arr.indexOf("banana"), 1); // 배열에서 특정단어찾아서 인덱스를 찾고 그로부터 1개 삭제

console.log(Object.keys(arr)); // [0,1,2] 키캆 배열로 추출
// 어떻게보면 배열도 key:value 형태인데, key가 자동으로 늘어나는 숫자일뿐이라고 생각하면된다.
```
