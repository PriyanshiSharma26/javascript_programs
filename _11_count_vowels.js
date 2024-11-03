function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                count++;
                break; // Stop checking if a match is found
            }
        }
    }
    return count;
}

console.log(countVowels("Hello World")); // 3
