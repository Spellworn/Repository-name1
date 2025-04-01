// BEGIN (write your solution here)

function newYearCongratulate(year: number, name: string): string;
function newYearCongratulate(name: string): string;

function newYearCongratulate(name: unknown, year?: unknown ) {
    if (year === undefined) {
        return `Hi ${name}! Happy New Year!`;
    }
    return `Hi ${year}! Happy New Year ${name}!`;
}
// END

export default newYearCongratulate;
