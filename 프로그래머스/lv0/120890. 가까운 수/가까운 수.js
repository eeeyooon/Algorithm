function solution(array, n) {
    
    let ans = [];
    
    for (let num of array) {
        ans.push(Math.abs(num - n))
    }
        
    const min = Math.min(...ans);
  
    return array.sort((a,b)=> a-b).find(a => Math.abs(a - n) === min);
    
}