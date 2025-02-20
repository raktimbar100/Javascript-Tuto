//var->globally scope,redefine,declaration can be done which is not a good practice in js
{
    var name='Raktim';
    console.log(name);
    var name='hello';
    console.log(name);
}
////let->block scope,redefine/update of value can be done,declaration can not be done.
{
    let number=10;
    console.log(number);
    number=20;
    console.log(number);
    //let number=40;->it can't be done
}
//const->block scope,redefine,declaration can not be done
{
    const salary=40000;
    //salary=45;//Uncaught TypeError: Assignment to constant variable.  at first.js:19:11
    console.log(salary);
}
salary=400;
console.log(salary);//it can be done because const,let both are blocked scope

//primitive datatypes
//number,string,boolean,undefined,null,bigint,Symbol

let age=20;
console.log(typeof age);

let fullname='Raktim';
console.log(typeof fullname);

let isFollow=true;
console.log(typeof isFollow);

let salary1=BigInt(20000);
console.log(typeof salary1);

let refer=null;
console.log(typeof refer);

let a;
console.log(typeof a);

let emo=Symbol("Hi How are you?:");
console.log(typeof emo);
//Objects declaration
const Student={
    NAME:"RAKTIM",
    ROLL:21,
    MARKS:"GOOD",
    ISPASS:true
};
console.log(Student);
console.log(Student["NAME"]);
console.log(Student["ROLL"]);
console.log(Student["MARKS"]);
console.log(Student["ISPASS"]);
console.log(Student.NAME);
console.log(Student.ROLL);
console.log(Student.MARKS);
console.log(Student.ISPASS);
Student.NAME="SHYAM";
console.log(Student.NAME);
//operators in js
let a1=4;
let b1=3;
console.log(a1+b1);
console.log(a1-b1);
console.log(a1*b1);
console.log(a1/b1);
console.log(a1**b1);
console.log(a1%b1);
console.log("a ",a1++);//4
console.log("a ",++a1);//5->6
console.log("a ",++b1);//4
console.log("a ",b1++);//4

//Assignment Operator
let c1=10;
c1+=1;//11
c1*=2;//22
c1-=1;//21
c1/=3;//7
c1%=2;//1
c1**=4//1
console.log(c1);

//Operators in js
let e=2;
console.log(e==2);
console.log(e!=2);
console.log(e>2);
console.log(e<2);
console.log(e>=2);
console.log(e<=2);

let g=12;
let k='12';
console.log(g==k); //here '12' will be treated as a number
console.log(g===k);//here the object will be samely treated as string.

//Logical operators
var marks=90;
let subject='English';
if(subject==='English' && marks>=85){
    console.log("GRADE A ");
}else{
    console.log("Lower Grade")
}

let p1=true;
let p2=false;
console.log(p1==true && p2==true);
console.log(p1==true && p2==false);
console.log(p1==false && p2==true);
console.log(p1==false && p2==false);

console.log(p1==true || p2==true);
console.log(p1==true || p2==false);
console.log(p1==false || p2==true);
console.log(p1==false || p2==false);

console.log(!(p1==false || p2==false));

//Ternary Operator
let pr=50;
let val=pr > 60?"You can buy":"you cant buy";
console.log(val);
/*
Qs1. Get user to input a number using prompt(“Enter a number:

”). Check if the number is

a multiple of 5 or not.
*/
let num=prompt("Enter a number ");
if(num%5===0){
    console.log("Multiple of 5");
}else{
    console.log("Not multiple of 5");
}

let ymarks=56;
if(ymarks>=80 && ymarks<=100){
    console.log("A");
}
else if(ymarks>=70 && ymarks<=79){
    console.log("B");
}
else if(ymarks>=60 && ymarks<=69){
    console.log("C");
}
if(ymarks>=50 && ymarks<=59){
    console.log("D");
}
else{
    console.log("F");
}


