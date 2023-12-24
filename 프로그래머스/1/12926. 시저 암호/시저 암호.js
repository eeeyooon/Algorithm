function solution(s, n) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    let answer = "";
    
    for (let i=0; i<s.length; i++) {
        let alp = s[i];
        if (alp === " ") {
            answer += " ";
            continue; // 아래 코드 실행 x
        }
        let alpArr = upper.includes(alp) ? upper : lower;
        let index = alpArr.indexOf(alp) + n;
        if (index >= alpArr.length) index -= alpArr.length;
        answer += alpArr[index]
    }
    return answer;
}