 // datatypes
/*
var num = 16;  //number
console.log(num) ;                            
var lastName = "Johnson"; //string
console.log(lastName);                    
var x = {firstName:"John", lastName:"Doe"}; //object  
console.log(x); 
let truth=false; //boolean
let fruits=['appple', 'mango', 'banana']//array
let random;//undefined
let nothing=null;//value null

*/

let fruit='banana';
console.log(fruit);

console.log(fruit.length);
console.log(fruit.indexOf('b'));
console.log(fruit.slice(2,5));
console.log(fruit.replace('ban','123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));


//spliting by comma and by alphabet

//arrays

let veg=['tomato', 'potato','beans','locule'];
veg = new Array ('tomato', 'potato','beans','locule');
console.log(veg[2]);

//array using for loop
for(let i=0;i<veg.length;i++)
{
    console.log(veg[i]);

}


let sum = 10+10;
console.log(sum);

var a = 14;
console.log(a);

var l=5;
var s=10;
var g=12;
var result = l+s +"latha"+" "+s+g;

console.log(result);


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
for( let x=2; x<=20; x+=2)
{
    console.log(x);
}
//while loop
var num=0;
while(num<10)
{
    num+=1;
    console.log(num);
}
/*
document.getElementById('sometext').innerHTML;
*/

//numbers in js
var num1=12;
num1++;
console.log(num1*4);

//function in js
function fun()
{
    console.log("printing option");
}
fun();

function greeting()
{
    var name=prompt('enter your name');
    var result='hello'+' '+name;
    console.log(result);

}
 //greeting();

 //passing an argument

 function greeting(yourname)
{
    
    var result='hello'+' '+yourname;
    console.log(result);

}
var name=prompt('enter your name');
 //greeting(name)

//passing tha arguments in js

function sumNo( l,s)
{
    var result=l+s;
    console.log(result);
}
sumNo(23,10);

var s="suma";
console.log(s);


