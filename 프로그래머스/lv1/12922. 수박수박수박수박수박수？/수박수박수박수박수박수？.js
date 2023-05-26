function solution(n) {

    let result = "";
    
    for (let i=0; i<n; i++) {
        (i%2) ? result+="박" : result+="수";
    }
    
    return result;
}