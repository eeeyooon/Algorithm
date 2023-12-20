const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "run/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
input.shift();

let uniqueArr = [...new Set(input)];
uniqueArr = uniqueArr.sort((a,b) => a.length - b.length || a.localeCompare(b)).join("\n");

console.log(uniqueArr);
