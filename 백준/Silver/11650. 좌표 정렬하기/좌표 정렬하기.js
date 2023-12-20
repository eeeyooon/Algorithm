const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim()
				.split('\n').slice(1).map(v => v.split(' ').map(Number));

let answer = input.sort((a,b) => {
    if (a[0] === b[0]) {
        if(a[1] < b[1]) return -1;
    }
    return a[0] - b[0]
}).map(v => v.join(' ')).join("\n");

console.log(answer);