// BEGIN (write your solution here)
function filterAnagrams(word:string, anagram: string[]) {
    const sorted = word.split("").sort().join("");
    let result:string[] = [];
    for (let i = 0; i < anagram.length; i++) {
        let sortedAnagram = anagram[i].split("").sort().join("");
        if (sorted === sortedAnagram) {
            result.push(anagram[i]);
        }
    }
    return result;
}
// END

export default filterAnagrams;