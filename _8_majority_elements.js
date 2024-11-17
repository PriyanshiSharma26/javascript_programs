// find the element whose ocuurence  the most in array

let arr=[1,2,3,4,1,2,1,1,3,4,1,5,5,5,5]
let max_count=0
let max_element=arr[0]

for(let i=1;i<arr.length;i++)
{
    let count=1
    for(let j=1+1;j<arr.length;j++)
    {
        if(arr[i]===arr[j])
        {
            count++
        }
    }
    if(count>max_count)
    {

        max_count=count
        max_element=arr[i]
    }


}

console.log(max_element+ " occurs" +max_count +"times")