function solution(numbers) {
    return numbers.reduce((acc,curr) => acc+=curr, 0)/numbers.length;
}