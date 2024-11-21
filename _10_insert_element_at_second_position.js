//10. Insert an element at the second position in the array [15, 16, 17]

let myArray = [15, 16, 17];
let newElement = 14;


for (let i = myArray.length - 1; i >= 1; i--) {
    myArray[i + 1] = myArray[i];
}

myArray[1] = newElement;

console.log(myArray); 
