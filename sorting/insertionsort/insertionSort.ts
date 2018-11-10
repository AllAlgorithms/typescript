export function insertionSort(arr: Array<number>): Array<number> {
    for(let i = 0; i < arr.length - 1; i++){
        let lowestInd = i;
        //let lowestVal = arr[i];
        for (let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowestInd]){
                lowestInd = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[lowestInd];
        arr[lowestInd] = temp;
    }       
    
    return arr;
}