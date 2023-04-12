const kr_score = prompt("국어 점수를 입력하세요.");
const math_score = prompt("수학 점수를 입력하세요.");
const eng_score = prompt("영어 점수를 입력하세요.");

const avg = Math.floor((kr_score + math_score + eng_score) / 3);

console.log(avg);
