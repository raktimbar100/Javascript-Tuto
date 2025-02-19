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

