/**
 * fibonacci implemented using es6 generators, thus being more efficient than the naive recursive approach
 *
 *	@source https://github.com/AllAlgorithms/TypeScript
 */
function* fib(n: number, current = 0, next = 1) {
    if (n === 0) {
        return current;
    }
    yield current;
    yield *fib(n - 1, next, current + next);
}

export const fibonacci = (n: number): number => {
    const generator = fib(n + 1);
    let ret;
    for (let i = 0; i <= n; i++) {
        ret = generator.next();
        console.log(ret);
    }

    return ret ? ret.value : 0;
};
