function solution(a, b) {
    const 요일 = ["FRI", "SAT", "SUN", "MON", "TUE", "WED","THU"];
    const 월의마지막일수 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    let 일수 = 0;
    for (let i=0; i<a-1; i++) {
        일수 += 월의마지막일수[i];
    }
    
    return 요일[(일수+b-1)%7]
 
    
}