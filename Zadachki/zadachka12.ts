// BEGIN (write your solution here)
function filter (numbers: number[], callback: (n: number) => boolean): number[] {
    const result: number[] = [];
    numbers.forEach((n) => {
        if (callback(n)) {
            result.push(n);
        }
    })
    return result;
}
export default filter;