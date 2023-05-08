function solution(my_string) {
    
     return answer = [...my_string].map(a => a.charCodeAt() >= 65 && a.charCodeAt() < 97 ? a.toLowerCase() : a.toUpperCase()).join("");
   
}