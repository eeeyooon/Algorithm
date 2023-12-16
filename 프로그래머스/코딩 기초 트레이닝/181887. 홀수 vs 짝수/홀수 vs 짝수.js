function solution(num_list) {
    return Math.max(...num_list.reduce((acc, cur, idx) => {
        if(idx%2 === 0) return [acc[0], acc[1]+=cur]
        return [acc[0]+=cur, acc[1]]
    }, [0, 0]));
}