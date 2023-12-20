const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);

console.log(input[0] > input[1] ? ">" : input[0] === input[1] ? "==" : "<");