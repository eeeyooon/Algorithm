function solution(n, m, section) {
    let paintCnt = 0; //칠한 횟수
    let painted = 0; //칠한 구역
    
    section.forEach((n) => {

    // 현재 구역이 현재까지 칠한 구역보다 크다면
    if (n > painted) {

      // 구역을 칠해주고 현재까지 칠한 구역을 업데이트 시켜준다.
      painted = n + m - 1;

      // 페인트를 칠했으니
      paintCnt++;
    }
        
  });
    
    return paintCnt;
}