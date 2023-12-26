function solution(array, commands) {
    let result = [];
    for (let command of commands) {
        const [i,j,k] = command;
        let temp = array.slice(i-1, j).sort((a,b)=>a-b);
        result.push(temp[k-1])
    }
    return result;
}