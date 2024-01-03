function solution(nums) {
    // 가장 많은 종류의 포켓몬을 선택하는 방법. 그 종류 번호의 개수를 리턴
    // nums는 항상 짝수
    // 가져갈 수 있는 포켓몬은 N/2
    
    // 가져갈 수 있는 포켓몬의 수를 먼저 구하고
    // 중복 없이 포켓몬 종류가 몇인지 -> new Set 사용
    
    let getMonsNum = ~~(nums.length/2);
    let uniqueMons = [...new Set(nums)]
    
    return uniqueMons.length >= getMonsNum ? getMonsNum : uniqueMons.length;
    
    
    
    
}