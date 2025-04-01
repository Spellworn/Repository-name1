// BEGIN (write your solution here)
type Point = [number, number, number];
function isTheSamePoint(p1:Point, p2: Point) {
    let j = 0;
    for (let i = 0; i < p1.length; i++) {
        if (p1[i] === p2[i]){
            j++;
        }
    }
    if (j === 3) {
        return true;
    }
    return false;
}
// END

export default isTheSamePoint;
