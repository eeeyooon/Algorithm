function solution(strings, n) {
    
   return strings.sort((a,b) => {
        
            if (a[n] > b[n]) return 1;

            else if (a[n] < b[n]) return -1;

            else return a > b ? 1 : -1; 
        })


}

// 이 함수가 리턴하는 값이 0보다 작을 경우,  a가 b보다 앞에 오도록 정렬하고,
// 이 함수가 리턴하는 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬합니다.
// 만약 0을 리턴하면, a와 b의 순서를 변경하지 않습니다.