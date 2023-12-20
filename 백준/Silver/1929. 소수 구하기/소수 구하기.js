const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(" ").map(Number);

const num1 = input[0];
const num2 = input[1];


const isPrime = (num) => {
    if(num === 1) return false;
    for(var i=2; i<=Math.sqrt(num); i++){
        if((num%i)==0) return false;
    }
    return true;
}

for(var i=num1; i<=num2; i++) {
    if(isPrime(i)) console.log(i)
}