function solution(num, k) {
    let answer = num.toString().indexOf(k);
    return answer >= 0 ? answer + 1 : -1 ;
    
}