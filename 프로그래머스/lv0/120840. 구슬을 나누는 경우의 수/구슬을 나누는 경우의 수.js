function solution(balls, share) {
    if (share === 0) return 1
    return  factorial(balls) / (factorial(balls - share) * factorial(share))
}

function factorial(n) {
    let re = BigInt(1)

    for (let result = 2; result <= n; result++) {
        re *= BigInt(result)
    }
    return re
}