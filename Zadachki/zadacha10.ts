/* eslint-disable @typescript-eslint/no-explicit-any */

// BEGIN (write your solution here)
function getParams (querystr: string) {
    const params = querystr.split("&");
    const initial: any = {};

    const result: object = params.reduce((acc, part) => {
        const [key, value] = part.split("=");
        acc[key] = value;
        return acc;
    }, initial);
    return result;
}
// END

export default getParams;
