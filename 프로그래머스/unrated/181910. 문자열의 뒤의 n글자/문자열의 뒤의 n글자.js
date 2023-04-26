function solution(my_string, n) {
    let new_string = my_string.split('').reverse();
    let answer = [];
    for (let i=0; i<n; i++) {
        answer.push(new_string[i])
    }
    return answer.reverse().join('');
}