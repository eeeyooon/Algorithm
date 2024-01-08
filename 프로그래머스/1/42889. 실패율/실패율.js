function solution(N, stages) {
    let failureRates = [];
    
    for (let i=1; i<=N; i++) {
        let totalPlayer = stages.filter(stage => stage >= i).length;
        // 도달한 스테이지가 i 이상인 요소들의 개수 == 해당 스테이지에 도달한 플레이어 수
        let failed = stages.filter(stage => stage == i).length;
        // 현재 스테이지와 일치하는 요소의 개수 == 해당 스테이지에서 실패한 플레이어 수
        let failureRate = failed / totalPlayer;
        failureRates.push({stage:i, rate:failureRate})
        // 스테이지 번호와 실패율을 함께 추가함
    }
    
    failureRates.sort((a,b) => b.rate - a.rate);
    // 내림차순 정렬
    return failureRates.map(v=>v.stage);
    // 실패율을 기준으로 내림차순 정렬한 전체 실패율 배열에서 스테이지 번호만 리턴.
}