function solution(order) {
    return order.toString().split('').filter(a => a === "3" || a === "6" || a === "9").length;
}