# Set (중복이없는 배열)

```js
const myset = new Set();

myset.add(1);
myset.add(1); // 의미없음
myset.add(2);
myset.add(3);

console.log(myset);
console.log(myset.has(2)); //true
console.log(myset.has(6)); //false
console.log(myset.size); // 3

for (let i of myset) {
  console.log(i); // 1,2,3
}

const arr = Array.from(myset); // convert Set to Array
console.log(arr); // [1,2,3]

const setAgain = new Set(arr); // conver Array to Set
console.log(setAgain);
```
