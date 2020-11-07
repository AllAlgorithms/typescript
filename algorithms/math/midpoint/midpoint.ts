export function midpoint(a: [number, number], b: [number, number]): [number, number] {
    const x1 = a[0];
    const x2 = b[0];
    const y1 = a[1];
    const y2 = b[1];

    const x = (x1 + x2) / 2;
    const y = (y1 + y2) / 2;

    return [x, y];
}

console.log(midpoint([5, 5], [5, 5]));
