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
