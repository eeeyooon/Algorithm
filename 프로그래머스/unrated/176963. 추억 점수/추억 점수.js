function solution(name, yearning, photo) {
  
    // 객체를 만들어 점수를 저장한다.
    const memory = {};
    for (let i = 0; i < name.length; i++) {
    memory[name[i]] = yearning[i];
    }
    
    console.log(memory);
    
  return photo.map((arr) =>
    arr.reduce((acc, cur) => acc + (memory[cur] || 0), 0)
    // memory 객체에 해당 사람이 있으면 점수를 없으면 0을 더해준다.
  );
    


}