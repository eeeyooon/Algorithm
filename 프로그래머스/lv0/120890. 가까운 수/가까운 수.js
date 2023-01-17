function solution(array, n) {
    
//     let ans = [];
//     for (let num of array) {
//         ans.push(Math.abs(num - n))
//     }
//     const min = Math.min(...ans);
    
    //위 내용을 한줄로
    const min = Math.min(...array.map(a => Math.abs(a - n)));
    
    return array.sort((a,b)=> a-b).find(a => Math.abs(a - n) === min);
    
}