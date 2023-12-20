const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split("\n");

let numCount = Number(input[0]);
let numArr = input[1].split(" ").map(Number);


function isPrime(num) {
    if (num === 1) {
        return false;
    }
    
    if (num === 2) {
        return true;
    }
    
    for (let i=2; i<num; i++) {
        if(num%i===0){
            return false;
        }
    }
    return true;
}

let primeArr = numArr.filter(v => isPrime(v));

console.log(primeArr.length);
