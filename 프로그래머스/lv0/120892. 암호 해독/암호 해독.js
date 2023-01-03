function solution(cipher, code) {
    var answer = '';
    
    for (let i=1; i<=cipher.length; i++) {
        answer += cipher.charAt(code*i -1);
    }
    
    return answer;
}