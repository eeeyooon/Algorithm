const name = prompt("학생의 이름을 입력하세요").split(" ");
const math = prompt("수학 점수를 입력하세요").split(" ");

const obj = {};

for (let i = 0; i < name.length; i++) {
  obj[name[i]] = parseInt(math[i]);
}

console.log(obj);
