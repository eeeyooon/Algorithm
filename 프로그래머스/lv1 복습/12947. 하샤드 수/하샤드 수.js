function solution(x) {
  let accValue = [...(x.toString())].reduce((acc, curr) => acc + +curr, 0);  
  return x % accValue === 0;
}
