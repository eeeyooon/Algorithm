function solution(ingredient) {
    // 아래서부터 빵 - 야채 - 고기 - 빵 ( 1-2-3-1)
    let count = 0;
    let stack = [];
    
    ingredient.forEach((food, idx) => {
        stack.push(food);
        
        if (stack.length >= 4) {
            const order = stack.slice(-4).join("");
            if (order === "1231") {
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
                count++;
            }
        }
    })
    
    return count;
}