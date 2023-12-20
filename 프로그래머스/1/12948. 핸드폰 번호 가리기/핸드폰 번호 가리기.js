function solution(phone_number) {
    const back4num = phone_number.length - 4;
    let answer = "*".repeat(back4num) + (phone_number.split("").splice(back4num)).join("")
   return answer;
}