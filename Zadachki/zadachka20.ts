// BEGIN (write your solution here)
function last(param: number | string) {
    if (typeof param === "number") {
        return param % 10
    }
    return param.slice(-1);
}
// END

export default last;
