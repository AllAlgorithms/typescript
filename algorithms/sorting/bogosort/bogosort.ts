export function bogoSort(arr: Array<number>): Array<number> {
    while (!isSorted(arr)){
        //shuffle code here.
    }
    return arr;
}

function  isSorted(data: Array<number>): boolean{
    for(let i = 0; i < data.length - 1; i++){
        if(data[i] > data[i + 1]) return false;
    }
    return true;
}
