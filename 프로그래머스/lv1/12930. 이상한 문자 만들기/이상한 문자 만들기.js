function solution(s) {
    let result = "";
    let flag = true;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") {
          flag = false;
          result += s[i];
        } else if (flag) {
          result += s[i].toUpperCase();
        } else {
          result += s[i].toLowerCase();
        }
        flag = !flag;
      }
    
  return result;
}