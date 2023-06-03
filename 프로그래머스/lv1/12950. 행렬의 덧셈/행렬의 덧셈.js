function solution(arr1, arr2) {
    
    const answer = [];
    
    arr1.forEach((outVal, outIndex) => {
        answer.push((outVal.map((inVal, inIndex) => inVal + arr2[outIndex][inIndex])));
    });
    
    return answer;
}
