function solution(A, B){
    //제일 작은 값이랑 제일 큰값이랑 곱해야 최솟값아님?
    //그럼 A는 오름차순, B는 내림차순으로 같은 인덱스끼리 곱해서 더하기
    
    A.sort((a,b) => a-b);
    B.sort((a,b) => b-a);
    
    return A.reduce((acc, val, idx) => {
        return acc += (val * B[idx]);
    }, 0)
    
}