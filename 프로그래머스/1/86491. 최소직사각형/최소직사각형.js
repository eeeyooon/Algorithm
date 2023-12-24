function solution(sizes) {
    
  const widthArr = sizes.map(card => Math.min(...card));
  const heightArr = sizes.map(card => Math.max(...card));
    
  return Math.max(...widthArr) * Math.max(...heightArr);
}