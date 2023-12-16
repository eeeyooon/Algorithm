function solution(a, d, included) {
    let newArr = [a];
    for (let i=0; i<included.length-1; i++) {
        newArr.push(newArr[i] + d)
    }
    let result = 0;
    newArr.map((v,idx) => { if (included[idx] === true) result += v})
    return result;
}