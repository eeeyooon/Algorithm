function solution(arr, queries) {
    var answer = [];
    for(let [s,e,k] of queries){
        let newArr = arr.filter((v,i)=>(i >= s && i <= e && v > k)).sort((a,b)=>a-b)[0];
        answer.push(newArr ? newArr : -1);
    }
return answer;
}
