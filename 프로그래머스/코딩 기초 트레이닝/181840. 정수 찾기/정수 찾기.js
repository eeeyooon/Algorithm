function solution(num_list, n) {
    return num_list.some(a => a === n) ? 1 : 0;
}