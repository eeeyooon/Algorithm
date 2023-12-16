function solution(strArr) {
 return strArr.map((str,i)=>i % 2 === 1 ? str.toUpperCase() : str.toLowerCase());
}