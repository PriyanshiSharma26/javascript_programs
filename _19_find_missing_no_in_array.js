function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2; // Sum of numbers from 1 to n
    let actualSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      actualSum += arr[i];
    }
  
    return expectedSum - actualSum;
  }
  
  const arr = [1, 2, 3, 5];
  const n = 5;
  console.log(findMissingNumber(arr, n)); // Output: 4
  