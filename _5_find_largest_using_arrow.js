//write an arrow function which takes two values and return the largest value

let largest =(a,b)=>{
    if(a>b)
    {
        return a
    }
    else{
        return b
    }
}

let res=largest(20,15)
console.log(`${res} is greater`)