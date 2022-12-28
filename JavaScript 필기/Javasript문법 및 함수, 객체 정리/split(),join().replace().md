##`.split()`과 `.join()`, `.replace()`

<br/>

`String.prototype.split()`
    
    소괄호 내의 기호로 문자열을 나누어 배열로 만듦.

<br/>

`Array.prototype.join()`

    소괄호 내의 기호로 배열의 각 원소를 이어붙여 문자열로 만듦.

<br/>
<br/>

> 즉, `.split()`은 문자열을 배열로 나누고, `.join()`은 배열을 문자열로 이어붙인다. 그래서 다음과 같이 활용이 가능하다.

<br/>
<br/>

**"a= b,c:d"라는 문자열 str을 = , : 기준으로 나누어 ["a", "b", "c", "d"]라는 배열로 만들자.**

```javascript
let str = "a=b,c:d";

str; //(1) "a=b,c:d"

str.split("=");
// (2) ["a", "b,c:d"]

str.split("=").join(",");
// "a, b,c:d"

str.split("=").join(",").split(":");
// (3) ["a,b,c", "d"]

str.split("=").join(",").split(":").join(",");
// (4) "a,b,c,d"

str.split("=").join(",").split(":").join(",").split(",");
// (5) ["a", "b", "c", "d"]
```

<br/>
<br/>

> 즉, `.split()`으로 원하는 조건(= , :)의 기호를 기준으로 하나하나 빼서 배열로 나누고, 나눠진 배열을 `.join(",")`으로 다시 문자열로 합치는 것을 반복한다.

<br/>
<br/>

**`.replace()`와 비교**
```javascript
//split, join
  let name = 'nevin';
  let new_name = name.split('n').join('k');
  console.log(new_name);
  
  // output: 'kevik'

/*-------------------------------------------------*/

//replace
  let name = 'nevin';
  let new_name = name.replace('n','k');
  console.log(new_name);

  // output: 'kevin'

```
<br/>
<br/>
<br/>