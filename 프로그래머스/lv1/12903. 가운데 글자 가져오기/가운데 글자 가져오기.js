function solution(s) {
    
    if (s.length % 2 === 1) {
           return s[Math.floor(s.length / 2)]
    } else {
        return s[Math.floor(s.length / 2 - 1)]+ s[Math.floor(s.length / 2)]
    }
}