function solution(lottos, win_nums) {  
    let MaxRank = 0, MinRank = 0, correctCount = 0, unknownNums = 0;

    for (let i=0; i<lottos.length; i++) {
        if (lottos.includes(win_nums[i])) {
            correctCount++;
        }
        if (lottos[i] === 0) unknownNums++;
    }
    
    
    switch(unknownNums + correctCount) {
        case 6: 
            MaxRank = 1;
            break;
        case 5: 
            MaxRank = 2;
            break;
        case 4:
            MaxRank = 3;
            break;
        case 3: 
            MaxRank = 4;
            break;
        case 2: 
            MaxRank = 5;
            break;
        default:
            MaxRank = 6;
    }
    
    switch (correctCount) {
        case 6:
            MinRank = 1;
            break;
        case 5:
            MinRank = 2;
            break;
        case 4:
            MinRank = 3;
            break;
        case 3:
            MinRank = 4;
            break;
        case 2:
            MinRank = 5;
            break;
        default:
            MinRank = 6;
    }
    
    return [MaxRank, MinRank];
}
