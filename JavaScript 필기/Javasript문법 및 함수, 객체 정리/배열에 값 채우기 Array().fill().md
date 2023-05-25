## 배열에 값 채우기 Array().fill()

### `Array()` 생성자

- `Array()` 생성자는 새로운 Array 객체를 생성할 때 사용한다.
- 매개변수가 1개이고 숫자인 경우 매개변수로 전달된 숫자를 length 값으로 가지는 빈배열을 생성한다.

<br/>

```js
let arr = new Array(2);
console.log(arr); //(2) [empty * 2]
console.log(arr.length); //2
```

<br/>
<br/>

### `Array.prototype.fill()`

- `fill()` 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채운다.

#### `arr.fill(value[, start [, end]])`

- value : 배열을 채울 값.
- start(Optional) : 시작 인덱스, 기본 값은 0.
- end(Optional) : 끝 인덱스, 기본 값은 `this.length`

```js
const arr1 = [1, 2, 3, 4];
console.log(arr1.fill(0, 2, 4));
// [1, 2, 0, 0]
// == 2부터 4까지 0으로 채워라

console.log(arr1.fill(5, 1));
// [1, 5, 5, 5]
// == 1부터 끝까지 5로 채워라

console.log(arr1.fill(6));
// [6, 6, 6, 6]
// == 배열을 모두 6으로 채워라
```

<br/>
<br/>
<br/>
