let arr=[4,6,8,2,9,6]
for(let i=0;i<arr.length;i++)
{
    for(let j=i+1;j<arr.length;j++)
        {
            if(arr[i]>arr[j])
            {
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;  
            }      
        }
}
console.log("second minimum:",arr[1])
console.log("second minimum:",arr[arr.length-2])