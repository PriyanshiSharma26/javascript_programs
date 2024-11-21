//Remove the element at the second position in the array [18, 19, 20, 21]. 

let myArray = [18, 19, 20, 21]

for (let i = 1; i < myArray.length - 1; i++) {
    myArray[i] = myArray[i + 1];
}


myArray.length = myArray.length - 1;

console.log(myArray);  // Output: [18, 20, 21]
