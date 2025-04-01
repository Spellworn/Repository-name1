// BEGIN (write your solution here)
function isPlainObject(value: unknown): boolean {
    if (Array.isArray(value)) {
        return false;
    }
    return typeof value === "object";
}
// END

export default isPlainObject;
