## String.prototype.charCodaeAt()

<br/>

`charCodeAt()`는 주어진 인덱스에 대한 UTF-16 코드를 나타내는 0부터 65535 사이의 정수를 반환한다. 

<br/>
<br/>

```js
str.charCodeAt(index)
```

<br/>

#### 예제
```js
'ABC'.charCodeAt(0); // returns 65

```

<br/>
<br/>

- `index` : 0 이상이고 문자열의 길이보다 작은 정수. 숫자가 아니라면 0을 기본값으로 사용함.

- 반환값 : 주어진 인덱스에 대한 문자에 대해 UTF-16 코드를 나타내는 숫자. 범위 밖으로 넘어갔을 경우 `NaN` 반환.


<br/>
<br/>

    A~Z : 65 ~ 90
    a~z : 97 ~ 122

<br/>

## String.fromCharCode()

<br/>

`String.fromCharCode()`는 UTF-16 코드에 따라 문자열을 생성해 반환한다. 

<br/>

```js
String.fromCharCode(num1[, ...[, numN]])
```

<br/>

- `num1`, `...`, `numN` : UTF-16코드의 숫자 모음. 가능한 값의 범위는 0부터 65535이다. 

- 반환값 : 주어진 UTF-16코드 유닛 N개로 이루어진 문자열.

<br/>

#### 예제
```js
String.fromCharCode(65, 66, 67);  // "ABC"
```
<br/>
<br/>

> `charCodeAt()` : 문자 -> 유니코드 <br/> `fromCharCode()` : 유니코드 -> 문자

<br/>
<br/>
<br/>
<br/>




