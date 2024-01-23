function solution(n, lost, reserve) {
    
    let realLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    let realReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);
    
    let answer = n - realLost.length;

    for (let i = 0; i < realLost.length; i++) {
        let lostNum = realLost[i];
        if (realReserve.includes(lostNum - 1)) {
            answer++;
            realReserve = realReserve.filter(r => r !== lostNum - 1);
        } else if (realReserve.includes(lostNum + 1)) {
            answer++;
            realReserve = realReserve.filter(r => r !== lostNum + 1);
        }
    }


    return answer;
}
