let sum=0;
for(let i=1;i<=5;i++)
{
    sum+=i;
}
console.log(sum);

let n=12;
while(n>0){
    console.log(n);
    n--;
}
let i=1;
do{
    console.log("Hi RAKTIM!");
    i++;
}while(i<=10);

let str='RAKTIM BAR';
for(let i of str){
    console.log(i);
}
const Student1={
    name:'Raktim Bar',
    roll:12,
    class:'X'
};
for(let attr in Student1){
    console.log(Student1[attr]);
}

let gnum=25;
let userVal=prompt("Enter your guess values : ");
while(gnum!=userVal){
    let userVal=prompt("Sorry, not matched ! Enter your guess values again: ");
}
console.log("Congratulations! You did it!");