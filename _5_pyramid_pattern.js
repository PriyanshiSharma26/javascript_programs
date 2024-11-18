for(i=1;i<=5;i++)
    
{
    let star=""
    for(j=5;j>=i;j--)
    {
      star+=" "
    }

    for(let k=1;k<=i;k++)
    {
        star+="* "
    }
    console.log(star)
}