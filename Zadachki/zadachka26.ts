// BEGIN (write your solution here)
function lastIndex (str: string, char: string) {
    if (str.includes(char)) {
        return str.lastIndexOf(char);
    }
    return null;
}
// END

export default lastIndex;
