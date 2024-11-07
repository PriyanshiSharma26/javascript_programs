function countCharacterRepetitions(str) {
    let charCount = {};  // Object to store the count of each character

    // Loop through the string to count occurrences of each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        // If the character already exists in the object, increment its count, otherwise set to 1
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;  // Return the object containing character frequencies
}

// Test cases
console.log(countCharacterRepetitions("hello"));  
/*
{
    h: 1,
    e: 1,
    l: 2,
    o: 1
}
*/

console.log(countCharacterRepetitions("javascript"));  
/*
{
    j: 1,
    a: 2,
    v: 1,
    s: 1,
    c: 1,
    r: 1,
    i: 1,
    p: 1,
    t: 1
}
*/

console.log(countCharacterRepetitions("mississippi"));  
/*
{
    m: 1,
    i: 4,
    s: 4,
    p: 2
}
*/
