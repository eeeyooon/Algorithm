function solution(k, tangerine) {
    let countObj = {};

    // 각 귤 크기가 몇 번 등장했는지
    for (let size of tangerine) {
        if (countObj[size]) {
            countObj[size]++;
        } else {
            countObj[size] = 1;
        }
    }

    let counts = Object.values(countObj).sort((a, b) => b - a);

    let total = 0;
    let kinds = 0;

    
    for (let count of counts) {
        total += count;
        kinds++;
        if (total >= k) {
            break;
        }
    }

    return kinds;
}