function solution(arr1, arr2) {

    if (arr1.length === arr2.length) {
        const arr1Sum = arr1.reduce((cur, val) => val+= cur);
        const arr2Sum = arr2.reduce((cur, val) => val += cur)
        if ( arr1Sum > arr2Sum ) {
            return 1;
        } else if ( arr1Sum < arr2Sum) {
            return -1;
        } else {
            return 0;
        }
    } else {
        return ((arr1.length > arr2.length ) ? 1 : -1);
    }
}