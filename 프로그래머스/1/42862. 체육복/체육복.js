function solution(n, lost, reserve) {
    let realLost = lost.filter(l => !reserve.includes(l));
    let realReserve = reserve.filter(r => !lost.includes(r));
    
    realLost.sort((a,b) => a-b);
    realReserve.sort((a,b) => a-b);
    
    let answer = n - realLost.length;

    for (let i = 0; i < realLost.length; i++) {
        let lostNum = realLost[i];
        for (let j = 0; j < realReserve.length; j++) {
            let reserveNum = realReserve[j];
            if (reserveNum === lostNum - 1 || reserveNum === lostNum + 1) {
                answer += 1;
                realReserve[j] = -1; 
                break; 
            }
        }
    }

    return answer;
}
