let arr=[1,2,3,4,5,6]
let j=0
for(let i=1;i<arr.length;i++)
{
   
    let temp=arr[i]
     arr[i]=arr[j]
     arr[j]=temp
     j++
   }


console.log(arr)