function solution(num_list) {
    const a = num_list.reduce((acc,cur) => acc*cur)
    const b = num_list.reduce((acc,cur) => acc+cur)
    const c = Math.pow(b,2)
    if(a<c){
        return 1
    }else { return 0}
}