function solution(n, k) {
    let answer = [];
    for(var i = k; i <= n; i+=k){
        answer.push(i);
    }
    return answer;
}