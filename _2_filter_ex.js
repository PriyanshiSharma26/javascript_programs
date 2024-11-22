// .If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.

// const input = [1, -4, 12, 0, -3, 29, -150];
// output :- 42;	

const input = [1, -4, 12, 0, -3, 29, -150];
let positiveno=input.filter(function(num){
    
    return num>0

}
)
let sum=positiveno.reduce(function(count,num)
{
    return count+num

},0)

console.log(sum)





