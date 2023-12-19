function solution(s) {
    const centerNum = s.length/2;
    return s.length%2!==0 ? s.slice(~~(centerNum), ~~(centerNum)+1) : s.slice((centerNum)-1,(centerNum)+1)
    
}