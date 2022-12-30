// function solution(s1, s2) {
//     //return (s1.length + s2.length) - (s1.concat(s2).length) ;
    
//     let result = [...new Set(s1.concat(s2))];
//     return (s1.length + s2.length) - result.length;
// }



//const result = [...new Set(arr1)];

function solution(s1, s2) {
    let count = 0;
    for (let v of s1) if (s2.includes(v)) count++;
    return count;
}
