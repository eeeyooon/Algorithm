function solution(my_string, m, c) {
    let answer = [];
    let string='';
    for(let i = 0; i < my_string.length; i += m) {
        answer.push(my_string.slice(i, i+m));
    }
    for(let j = 0; j < answer.length; j++) {
        string+= answer[j][c-1]
    }
    return string
}