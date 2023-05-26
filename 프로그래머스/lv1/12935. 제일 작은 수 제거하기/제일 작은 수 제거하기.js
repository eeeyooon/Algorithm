function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length ? arr : [-1];
}

/*
메모

Math.min()과 Math.max()는 매개변수 중 하나라도 숫자가 아니거나 숫자로 변환할 수 없다면 NaN을 반환한다. 비슷하게 매개변수로 숫자의 배열인 객체를 전달하면 NaN을 반환한다. 왜냐하면 숫자배열인 객체는 배열 단일 항목으로 취급되고 이 객체를 숫자값으로 변환할 수 없기 때문이다.

그러나 "...연산자"(전개구문 연산자)를 사용하면 배열 객첼르 풀어서 전달하여 올바른 결과를 얻을 수 있다.

*/
