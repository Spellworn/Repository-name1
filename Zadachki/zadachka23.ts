// BEGIN (write your solution here)
function reverse(numbers: readonly number[]) {
    let result: number[] = [];
    for (let i=numbers.length-1; i>=0; i--) {
        result.push(numbers[i]);
    }
    return result;
}
// END

export default reverse;
