function solution(n, arr1, arr2) {
    
    
    const getRadixArr = (arr) => {
        let radixArr = [];
        
        for (let radixNum of arr) {
            let temp = [];
            radixNum = radixNum.toString(2);
        
            for (let i=0; i<n-radixNum.length; i++) {
                temp.push(0);
            }
            
            temp.push(radixNum);
            radixArr.push(temp.join(""))
        }
        return radixArr;
    }
    
    const radixArr1 = getRadixArr(arr1);
    const radixArr2 = getRadixArr(arr2);
    let overlapArr = [];
    
    for (let i=0; i<n; i++) {
        let temp = "";
        for (let j=0; j<n; j++) {
            if (radixArr1[i][j] === "0" && radixArr2[i][j] === "0") {
                temp += " ";
            } else {
                temp += "#";
            }
        }
        overlapArr.push(temp);
    }
    return overlapArr;
}