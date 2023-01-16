## slice()와 splice()


### Array.prototype.slice()

`slice()`는 begin부터 end 전까지의 복사본을 새로운 배열 객체로 반환한다. 즉, 원본 배열은 수정되지 않는다.

<br/>

`slice(start[, end])`

- start : 추출 시작 시점. `undefined`인 경우 0부터 slice. 음수일 땐 배열의 끝에서부터 추출. 배열의 길이와 같거나 큰 수를 지정할 경우 빈 배열을 반환한다.

- end : 추출 종료 시점. 지정하지 않으면 배열의 끝가지 slice. 음수일 땐 배열의 끝에서부터의 길이를 나타냄. 배열의 길이와 같거나 큰 수일 경우 배열의 끝가지 추출함.

- 반환값 : 추출한 요소를 포함한 **새로운** 배열.

<br/>

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
var arr1 = arr.slice(3, 5);			// [4, 5]
var arr2 = arr.slice(undefined, 5);		// [1, 2, 3, 4, 5]
var arr3 = arr.slice(-3);			// [8, 9, 10]
var arr4 = arr.slice(-3, 9);			// [8, 9]
var arr5 = arr.slice(10);			// []
var arr6 = arr.slice(4);			// [5, 6, 7, 8, 9, 10]
var arr7 = arr.slice(undefined);		// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```


<br/>
<br/>

### Array.prototype.splice()
`splice()`는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다. 이 메소드는 원본 배열 자체를 수정한다.

<br/>

`splice(start[, deleteCount[, item1[, item2[, ...]]]])`

- start : 배열의 변경을 시작하는 인덱스. 음수일땐 배열의 끝부터 셈. 절대값이 배열의 길이보다 큰 경우는 0으로 세팅.

- deleteCount : 배열에서 제거할 요소의 수. 생략/`array.length`가 `start`보다 큰 경우엔 start부터 모든 요소를 제거. 0 이하의 수는 어떤 요소도 제거되지 않음.

- item1, item2, ... : 배열에 추가할 요소. 지정하지 않으면 요소를 제거만 함.

- 반환값 : 제거한 요소를 담은 배열. 아무것도 제거하지 않았으면 빈 배열을 반환함.

<br/>

```js
	
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
 
var arr1 = arr.splice(10, 2, 'a', 'b', 'c');
 
console.log(arr);   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "a", "b", "c"]
console.log(arr1);  // [11, 12]
```


<br/>
<br/>
