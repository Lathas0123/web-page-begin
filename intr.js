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
        console.log((l) + "no is positive but not even");
    }
}
else
{
    console.log((l) + "negative num");
}

//using and logical operator

var v=8;
if(v>0 && v%2==0)
{
    console.log((v) + "positive and even");
}

//switch case

var day=4;
switch(day)
{
    case 1:
        console.log("sunday");
        break;

    case 2:
       console.log("monday");
        break;

    case 3:
        console.log("tuesday");
        break;

    case 4:
         console.log("wednesday");
         break;
    case 5:
         console.log("thrusday");
         break;
     case 6:
        console.log("friday");
         break;

         case 7:
        console.log("saturday");
         break;

         default:
             console.log("worng input");
}

//for loop

for( x=1; x<=20; x++)
{
    console.log(5*x);
}
// even no
for( x=2; x<=20; x+=2)
{
    console.log(x);
}

document.getElementById('sometext').innerHTML;
