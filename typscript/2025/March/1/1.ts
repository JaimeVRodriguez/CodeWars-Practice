export function removeChar(str: string): string {
    if (str.length == 2) {
        return '';
    } else {
        let newWord = str.slice(1);
        newWord = newWord.slice(0, -1);
        return newWord;
    }
}

console.log(removeChar('eloquent'));