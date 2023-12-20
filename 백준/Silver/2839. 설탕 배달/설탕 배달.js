const input = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();

let num = +input;

let answer = 0;

while (num > 0) {
  if (num%5 === 0) {
    num -=5;
  } else {
    num -=3;
  }
  answer += 1;
}

console.log(num === 0 ? answer : -1);


