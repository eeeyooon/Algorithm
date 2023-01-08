function solution(A, B){
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    return A.reduce((ac, v, i) => ac + v * B[i], 0);
}