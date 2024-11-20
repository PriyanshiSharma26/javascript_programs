let str1="my name is priyanshi"
let str2=""
let str3=""

for(let i=0;i<str1.length;i++)

{
   str2= str1.split(" ")
    
}
for(let j=str2.length-1;j>=0;j--)
{
    str3+=str2[j]+" "

}
console.log(str3)