function solution(i, j, k) {
    let answer='';
    while (i <= j) {
        answer += i;
        i++;
    }
    
    return answer.split(k).length-1;;
}