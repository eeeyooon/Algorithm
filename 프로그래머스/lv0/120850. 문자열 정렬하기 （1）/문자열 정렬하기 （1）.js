function solution(my_string) {
  let answer = [];
  for (let x of my_string) {
    if (x.charCodeAt() > 47 && x.charCodeAt() < 58) {
      answer.push(Number(x))
    }
  }
  answer.sort()
  return answer;
}
