function solution(a, b) {
    
    const week = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    const monthLastDay = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    let day = b + 4; // 1/1이 금요일이므로 b가 1이라면 인덱스는 5.
    
    for (let i=0; i<a-1; i++) {
        day += monthLastDay[i];
    }
    
    return week[day%7];
    
    
}