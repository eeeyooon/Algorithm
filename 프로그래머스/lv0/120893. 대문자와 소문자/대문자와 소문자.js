function solution(my_string) {
    var answer = '';
    
    answer = [...my_string].map(a => a.charCodeAt() >= 65 && a.charCodeAt() < 97 ? a.toLowerCase() : a.toUpperCase()).join("");
    return answer;
}