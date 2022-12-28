## Array.prototype.reduce()

`reduce()`메소드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환한다.

`reduce()`는 빈 요소를 제외하고 배열 내에 존재하는 각 요소에 대해 `callback`함수를 한 번씩 실행하는데, 콜백 함수는 다음의 네 인수를 받는다.

<br/>

- `accumulator`
- `currentValue`
- `currentIndex`
- `array`

<br/>
<br/>

콜백의 최초 호출 때 `accumulator`와 `currentValue`는 다음 두가지 값 중 하나를 가질 수 있다. 만약 `reduce()` 함수 호출에서 `initialValue`를 제공한 경우, `accumulator`는 `initialValue`와 같고 `currentValue`는 배열의 첫번째 값과 같다. `initialValue`를 제공하지 않았다면 `accumulator`는 배열의 첫 번째 값과 같고 `currentValue`는 두번째와 같다. 배열이 비어있는데 `initialValue`도 제공하지 않으면 `TypeError`가 발생한다. 배열의 요소가 하나뿐이면서 `initialValue`를 제공되지 않은 경우, 또는 `initialValue`는 주어졌으나 배열이 빈 경우엔 그 단독값을 `callback` 호출 ㅇ벗이 반환한다.

<br/>
<br/>
<br/>

### 메모
이게 뭔 소리야... 다시 더 보기..ㅋ


<br/>
<br/>