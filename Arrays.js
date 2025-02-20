let heroes=["Ironman","Shaktiman","Spiderman"];
let num=[10,20,30];
let info=["Shyam",12,45000];
console.log(heroes);
console.log(typeof heroes);
console.log(heroes[0]);
console.log(num);
console.log(info);
for(let i of heroes){
    console.log(i);
}
for(let i in heroes){
    console.log(heroes[i]);
}
let marks=[85,97,44,37,76,60];
let sum=0,n=marks.length;
for(let i of marks){
    sum+=i;
}
console.log(sum/n);
let pprice=[250,645,300,900,50];
for(let k=0;k<pprice.length;k++)
{
    disc=0.1*pprice[k];
    pprice[k]-=disc;
}
console.log(pprice);

pprice.push(800);
console.log(pprice);
pprice.pop();
console.log(pprice);
pprice.pop();
console.log(pprice);
console.log(pprice.toString());

let newarr=pprice.concat(num);
console.log(newarr);

num.unshift(11);
console.log(num);
num.shift();
console.log(num);
console.log(num.slice(1,3));
console.log(num.splice(2,1,900,789,56));
console.log(num);