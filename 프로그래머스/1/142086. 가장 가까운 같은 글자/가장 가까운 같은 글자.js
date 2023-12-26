function solution (s) {
    let temp = [];
    let answer = [];
    for (let i=0; i<s.length; i++) {
        if (temp.includes(s[i])) {
            answer.push(i - temp.lastIndexOf(s[i]))
            temp.push(s[i])
        } else {
            answer.push(-1)
            temp.push(s[i])
        }
    }
    return answer;
}