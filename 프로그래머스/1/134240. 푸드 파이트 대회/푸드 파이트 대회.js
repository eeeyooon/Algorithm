function solution(food) {
    let arr1 = []
    for (let i=1; i<food.length; i++) {
         if (food[i] > 1) {
             let index = 0;
             while (index !== ~~(food[i]/2)) {
                 arr1.push(i);
                 index++
             }
         }
    }
    let arr2 = [...arr1].reverse();
    let answer = arr1.join("")+"0"+arr2.join("")
    return answer;
}