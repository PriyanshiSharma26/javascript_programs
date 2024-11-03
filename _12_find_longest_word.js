function findLongestWord(str) {
    let longest = "";
    let currentWord = "";

    for (let i = 0; i <= str.length; i++) {
        if (str[i] === " " || i === str.length) {
            if (currentWord.length > longest.length) {
                longest = currentWord;
            }
            currentWord = ""; // Reset current word
        } else {
            currentWord += str[i]; // Build the current word
        }
    }

    return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // "jumped"
