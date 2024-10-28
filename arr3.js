var arr = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
];

arr[1].push(20000);
for(var rowIndex in arr){
    for(colIndex in arr[rowIndex]){
    console.log(arr[rowIndex][colIndex]);
    }
    
}
// <!-- /*
// for(var row of arr){
//     for(var element of row){
//         console.log(element);
//     }

// } -->