function solution(numbers) {
    // 중첩 for문 돌려서 모든 덧셈 결과값 저장하고 set처리
    let sumArr = [];
    for (let i=0; i<numbers.length; i++) {
        for (let j=i+1; j<numbers.length; j++) {
            sumArr.push(numbers[i]+numbers[j])
        }
    }
    return [...new Set(sumArr)].sort((a, b) => a - b);
}