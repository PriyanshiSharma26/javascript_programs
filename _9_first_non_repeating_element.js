//  find first non repeating character


let arr = [1, 2, 3, 4, 1, 2, 1, 1,5, 6];

let element = 0;


for (let i = 0; i < arr.length; i++) {
  let count = 0;

  
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] === arr[j]) {
      count++;
    }
  }

  
  if (count === 1) {
    element = arr[i];
    break; 
  }
}

console.log(element);  
