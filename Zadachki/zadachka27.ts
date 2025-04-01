// BEGIN (write your solution here)
function formatPrice(param: number | null | undefined) {
    if (typeof param === "number") {
        return `$${param.toFixed(2)}`;
    }
    return "$0.00";
}
// END

export default formatPrice;
