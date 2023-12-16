function solution(myStr) {
    const result = myStr.split(/[a|b|c]/g).filter(a => a)
    return result.length ? result : ["EMPTY"]
}