export function fisherYates(arr: Array<number>): void {
    for(let i = arr.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * i );
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
}