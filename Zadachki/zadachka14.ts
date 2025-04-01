// BEGIN (write your solution here)
function forEach(massive: number[], callback: (n: number, index: number) => void) :void {
    massive.forEach((n, index) => callback (n, index));
}

// END

export default forEach;
