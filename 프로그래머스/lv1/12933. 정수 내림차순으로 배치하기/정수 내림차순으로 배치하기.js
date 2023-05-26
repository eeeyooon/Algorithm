function solution(n) {
    
    return parseInt([...(n.toString())].sort((a,b) => b-a).join(""));
    
}