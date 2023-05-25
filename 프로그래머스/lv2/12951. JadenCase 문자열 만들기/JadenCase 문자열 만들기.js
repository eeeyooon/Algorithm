function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1))
    .join(" ");
}

/*
빈문자열을 접근할때 [0]와 charAt(0)의 차이.

- “”.charAt(0)은 “” 빈문자열을 그대로 돌려줌
- “”[0]은 undefined를 돌려줌.
*/
