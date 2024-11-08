
//Remove All Elements Less Than a Given Value

function removeLessThan(arr, value) {
    let result = [];  // Create an empty array to hold the valid elements

    // Iterate through the original array
    for (let i = 0; i < arr.length; i++) {
        // If the current element is greater than or equal to the given value
        if (arr[i] >= value) {
            result.push(arr[i]);  // Add the element to the result array
        }
    }

    // Return the new array with elements that are greater than or equal to the value
    return result;
}

// Test the function
let arr = [1, 2, 3, 4, 5, 6];
let value = 4;

let filteredArr = removeLessThan(arr, value);
console.log(filteredArr);  // Expected output: [4, 5, 6]
