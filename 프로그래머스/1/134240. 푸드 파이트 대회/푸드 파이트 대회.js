function solution(food) {
  let temp = "";

  for (let i = 1; i < food.length; i++) {
    temp += i.toString().repeat(~~(food[i] / 2));
  }

  let answer = temp + "0" + [...temp].reverse().join("");
  return answer;
}
