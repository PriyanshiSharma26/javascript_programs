
//9. Remove the first element of the array [11, 12, 13, 14]. 

let arr=[11,12,13,14]

for(let i=0;i<arr.length;i++)
{
    arr[i]=arr[i+1]
}
arr.length=arr.length-1
console.log(arr)
 