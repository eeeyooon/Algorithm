const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let numCount = Number(input[0]);
let scores = input[1].split(' ').map(Number);
let m = Math.max(...scores);
let newScores = scores.map(v => v/m*100);

console.log((newScores.reduce((a,c)=>a+c) / numCount));