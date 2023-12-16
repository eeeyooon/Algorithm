function solution(str_list, ex) {
   return str_list.map((v) => v.includes(ex) ? [] : v).join("");
}