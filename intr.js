/*
var y=10;
console.log(x);

var length = 16;  
console.log(length) ;                            
var lastName = "Johnson"; 
console.log(lastName);                    
var x = {firstName:"John", lastName:"Doe"};  
console.log(x); 

let sum = 10+10;
console.log(sum);

var a = 14;
console.log(a);

var l=5;
var s=10;
var g=12;
var result = l+s +"latha"+" "+s+g;

console.log(result);
*/

//if else statement

var x=11;

if(x%2==0)
{
    console.log((x) + "is" + "EvenNumber");
}
else
{
    console.log((x) + "is"+ "OddNumber");
}

//whether the number is positive negarive or 0

var n=-3;
if(n>0)
{
    console.log((n)+"  "+"positive Number");
    
}
else if(n<0)
{
    console.log((n)+"  "+"negative Number");
}
else
{
    console.log((n)+"  "+" either positive Number or negative");
}
//the number is positive and even

var l=23;
if(l>0)
{
    console.log((l) + "positive number");

    if(l%2==0)
    {
        console.log((l) + "positive and even");
    }
    else
    {
        console.log((l) + "no is positive but not even")
    }
}
else
{
    console.log((l) + "negative num")
}

//using and logical operator

var v=8
if(v>0 && v%2==0)
{
    console.log((v) + "positive and even")
}

