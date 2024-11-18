// 1
// 0 0
// 1 1 1
// 0 0 0 0


for(let i=0;i<=5;i++)

{
    let row=''
    for(let j=0;j<=i;j++)
    {
        if(i%2==0)
        {
            row+='0 '


        }
        else{
            row +='1 '
        }
    }
    console.log(row)
}