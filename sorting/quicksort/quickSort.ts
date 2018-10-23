
// implement quicksort using Lomuto partition scheme
export class Sorter {

    public quickSort (arr: Array<number>, low: number, high: number): Array<number> {
        let bottomSorted, topSorted
        if(low < high){
            const pivot = this.partition(arr, low, high);
            bottomSorted = this.quickSort(arr, low, pivot);
            topSorted = this.quickSort(arr, pivot+1, high);
        }
        return [...bottomSorted, ...topSorted];
    }

    private partition(arr: Array<number>, low: number, high: number): number {
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
            j++;
        } 
        let temp = arr[i];
        arr[i] = arr[high];
        arr[high] = temp;
        return i;
    
    }
}


