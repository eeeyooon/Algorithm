## Array.prototype.reduce()

인수로 함수를 받음.

`(누적 계산값, 현재값) ⇒ { return 계산값 };`

<br/>
<br/>

- `accumulator`

누적값. 콜백의 반환값을 누적함. 콜백의 첫번째 호출이면서 따로 initialValue를 제공한 경우에는 initialValue의 값임.

- `currentValue`

처리할 현재 요소.

- `currentIndex` (opt)

처리할 현재 요소의 인덱스값! initialValue를 제공한 경우 0, 아니면 1부터 시작함.

- `array` (opt)

reduce()를 호출한 배열.

- `initialValue` (opt)

최초 호출에서 첫번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫번째 요소를 사용함. 빈 배열에서 초기값없이 reduce()를 호출하면 오류가 발생함.

<br/>
<br/>

### 예제

배열의 모든 수 합치기

```js
let arr = [1, 2, 3, 4, 5];

// 여러 방법들 : for, for of, forEach

const result = arr.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.log(result); //15

// 0은 초기값. 옵셔널이기때문에 안써도 되긴하는데,
// 안쓰면 인덱스 첫번째값(여기선 1)이 들어감.
```

<br/>
<br/>

`map`이나 `filter` 대신 `reduce`를 사용하여 배열을 반환해보기

```js
let userList = [
  { name: "Mike", age: 30 },
  { name: "Tom", age: 10 },
  { name: "Jane", age: 27 },
  { name: "Sue", age: 26 },
  { name: "Harry", age: 42 },
  { name: "Steve", age: 60 },
];

//성인만 뽑아서 배열만들기
let resuult = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);

/* 
(1) 누산값 : [](초기값인 빈배열)
(2) 누산값 : ["Mike"]
(3) 누산값 : ["Mike", "Jane"]
 . . . 
(6) 누산값 : ["Mike", "Jane", "Sue", "Harry", "Steve"]	
*/

console.log(result); //["Mike", "Jane", "Sue", "Harry", "Steve"]
```

<br/>
<br/>
