function solution(a, b, n, sumCoke = 0) {
    while (n >= a) {
        sumCoke += (Math.floor(n / a) * b);
        n = n%a + Math.floor(n/a)*b
    }
    return sumCoke;
}