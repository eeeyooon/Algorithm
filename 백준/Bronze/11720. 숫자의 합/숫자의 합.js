const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");


const numCount = input[0];
let numbers = input[1].split("")
console.log(numbers.map(v=>+v).reduce((a,c)=>a+c))