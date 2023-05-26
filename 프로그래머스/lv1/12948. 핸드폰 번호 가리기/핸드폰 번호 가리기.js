function solution(phone_number) {
    let answer = "";
    for (let i=0; i<phone_number.length - 4; i++) {
        answer += "*"
    }
    
    return answer + phone_number.substring(phone_number.length - 4);
}