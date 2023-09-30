function solution(my_string, indices) {
    return [...my_string].map((v, idx) => indices.includes(idx) ? 0 : v).filter(v => v !== 0).join("")
}