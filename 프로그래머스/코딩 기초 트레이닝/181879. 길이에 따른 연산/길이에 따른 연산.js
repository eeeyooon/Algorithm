function solution(num_list) {
    const plus = num_list.reduce((prev, cur) => { return prev + cur}, 0);
    const multiple = num_list.reduce((prev, cur) => { return prev * cur}, 1)
    return num_list.length >= 11 ? plus : multiple;
}

