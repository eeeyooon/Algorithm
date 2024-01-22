function solution(dots) {
    // 가장 큰 x의 값 - 가장 작은 x의 값 = 가로 길이
    const width = Math.max(...dots.map(a => a[0]))-Math.min(...dots.map(a => a[0]))
    // 가장 큰 y의 값 - 가장 작은 y의 값 = 세로 길이
    const height = Math.max(...dots.map(a => a[1]))-Math.min(...dots.map(a => a[1]))
    // 넓이 반환
    return width*height
}