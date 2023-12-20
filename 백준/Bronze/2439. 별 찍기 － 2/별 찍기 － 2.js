const input = +require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();
for(i=1; i<=input; i++) {
  console.log(' '.repeat(input-i)+'*'.repeat(i))
} 