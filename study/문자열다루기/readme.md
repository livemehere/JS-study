```js
const str = "HI, there";
const obj = new String("hihi");
console.log(str);
console.log(obj);
console.log(str[1]); //I
console.log(str[str.length - 1]); //마지막 문자열은 길이 -1 로접근 (e)
console.log(str.indexOf("there")); // 해당 문자열내에 존재하는 문자열이면 index반환 없으면 -1 반환 (4)

// ex) indexOf로 특정 문자열 찾기
const arr = ["kong", "ha"];
console.log(arr.indexOf("ha")); //1
console.log(arr[1]); //ha
console.log(arr[arr.length - 1]); //ha

// slice()
console.log(str.slice(0, 5)); // index 0 에서 5개를 자른다!  (HI, t)
console.log(str.slice(4)); // index 4 에서부터 끝까지! (there)

console.log(str.toUpperCase()); //모두 대문자로 변경
console.log(str.toLowerCase()); //모두 소문자로 변경

console.log(str.replace("HI", "Bye")); // HI -> Bye 로 바꾼다 (Bye, there)

// 문자열 이어붙이기
const str1 = "My";
const str2 = " name";
const str3 = " is";
const str4 = " kong";
console.log(str1.concat(str2, str3, str4)); //My name is kong

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2)); //1,2,3,4,5,6

console.log(arr1.concat(str1, str2)); //[1,2,3,'my','name'] 배열에 문자열을 넣으면 고대로 하나의 인덱스를 차지함
const arr3 = ["hello", "world"];
// array.join([separator])은 배열을 문자열로 합쳐주는 함수이며, separator은 default값은 ','이고 직접 지정해서 인덱스마다 구분자를 넣어줄수있음
console.log(arr3.join(" ")); //hello world  (공백을 넣어줬기때문에, 인덱스마다 공백을 채움)
const longstring = "Didn't mean to make you cry";

console.log(longstring.split(" ")); //" " 을기준으로 단어를 잘라서 배열로 만듬  string.split(separator,limit)
// 참고로 "" 만넣으면 글자하나하나별로 배열로담음

// new Date() 는 자동으로 현재시간을 리턴한다
console.log(new Date(1998, 10, 30)); //주의할점은 Date(년,월-1,일) 이다. 월은 0~11 의 숫자로 1월~12월을 나타낸다

// isNaN([str]) -> 문자열이 숫자인지 아닌지 판별해주는것 "is not a Number?"
const mystr = "123";
console.log(isNaN(str1)); //true
console.log(isNaN(mystr)); //false
console.log(parseInt(mystr)); // String -> Number "123"-> 123  , 두번째인자는 진수처리 10진수,2진수, 16진수 ..등

const mynum = -12;
console.log(Math.abs(mynum)); //절대값반환 (모든자료형이가능함)

Math.abs(-10); // 10
Math.abs(-10.123); // 10.123
Math.abs(10); // 10
Math.abs("-2"); // 2
Math.abs(""); // 0
Math.abs(true); // 1
Math.abs(false); // 0
Math.abs(null); // 0
Math.abs(undefined); // NaN
Math.abs("apple"); // NaN

const t1 = new Date(2020, 08, 01, 0, 0, 0).getTime(); //단위 ms(밀리초) 1970년 1월 1일 부터 경과된시간 (년,월-1,일,시,분,초)
const t2 = new Date(2020, 08, 01, 0, 0, 1).getTime();
console.log(t1);
console.log(t2); //
console.log(t2 - t1); //1000(1초)
```
