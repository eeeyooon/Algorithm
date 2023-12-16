function solution(n) {
    return n.toString().split("").reduce((acc,cur) => acc + parseInt(cur, 10) , 0 );
}