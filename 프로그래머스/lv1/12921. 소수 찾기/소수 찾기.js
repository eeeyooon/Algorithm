function solution(n) {
    let arr = [];

    // 0과 1을 제외한 2부터 n까지 배열에 담기
    for(let i=2; i<=n; i++) {
        
    arr[i] = i;
        
    }
    
    for(let i=2; i<=n; i++) { // 인덱스 2부터 반복문 돌면서 0이면 다시 다음 반복문 돌기
    if (arr[i] === 0) continue;


      for(let j=i*2; j<=n; j+=i) { // 각 인덱스(i)의 배수들을 0으로 지정
          arr[j] = 0;
      }


    }

    // filter를 이용해 0이아닌 수들의 개수를 return
    return arr.filter(v => v!==0).length;
}
