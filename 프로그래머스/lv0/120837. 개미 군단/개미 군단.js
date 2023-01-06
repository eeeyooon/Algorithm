function solution(hp) {
    
    let lgAnt = Math.floor(hp/5);
    let mdAnt = Math.floor((hp - lgAnt * 5) / 3); 
    let smAnt = hp - (lgAnt * 5) - (mdAnt * 3);
    
    return lgAnt + mdAnt + smAnt;
    
    // return Math.floor(hp/5)+Math.floor((hp%5)/3)+(hp%5)%3;
    
}
