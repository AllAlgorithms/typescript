export function fisherYates(arr: Array<number>): void {
    // for i from n−1 downto 1 do
    for(let i = arr.length - 1; i > 0; i++){
        const j = Math.floor(Math.random()* i );
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }
}