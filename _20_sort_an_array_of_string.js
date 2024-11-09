function sortByLength(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].length > arr[j].length) {
          // Swap if the current string is longer than the next string
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
  
    return arr;
  }
  
  const arr = ["apple", "pie", "banana", "cherry"];
  console.log(sortByLength(arr)); // Output: [ 'pie', 'apple', 'banana', 'cherry' ]
  