function solution(num_list) {
    const newList = [...num_list].reverse();
    newList[0] > newList[1] ? num_list.push(newList[0] - newList[1]) : num_list.push(newList[0] * 2);
    return num_list;
}