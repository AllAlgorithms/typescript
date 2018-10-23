
//implement quicksort using Lomuto partition scheme
export function quickSort(arr: Array<number>, low: number, high: number): void {
    if(low < high){
        const pivot = partition(arr, low, high);
        quickSort(arr, low, pivot);
        quickSort(arr, pivot+1, high);
    }

}

function partition(arr: Array<number>, low: number, high: number): number {
    const pivot = arr[high];
    let i, j = low   
    while( j < high){
        if(arr[j] < pivot){
            if(i !== j){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            i++;
        }

    } 
    let temp = arr[i];
    arr[i] = arr[high];
    arr[high] = temp;
    return i;

}