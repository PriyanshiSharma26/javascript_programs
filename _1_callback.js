function sq(a)
{
    return a*a
}

    function sum(a,b,callback)
    {
        let c=a+b
        let d=callback(c)
        console.log(d)
    }
    sum(5,4,sq)
