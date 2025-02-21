function sum(a,b){
    return a+b;
};
//console.log(sum(10,20));

const mul=(a,b)=>{
    return a*b;
}

function vowel(str){
    let count=0;
    for(let v of str){
        if(v==='a'||v==='e'||v==='i'||v==='o'||v==='u')
        {
            count++;
        }
    }
    console.log(`number of vowels are ${count}`);
}

const vowcou=(str)=>{
    let count=0;
    for(let v of str){
        if(v==='a'||v==='e'||v==='i'||v==='o'||v==='u')
        {
            count++;
        }
    }
    console.log(`number of vowels are ${count}`);
}
let arr=[12,45,67];
arr.forEach((val,index,arr)=>{
    console.log(index,val**2,arr);
})

let newarr=arr.map((val)=>{
    console.log(val**2);
})
console.log(newarr);
let even=arr.filter((val)=>{
    return (val%2===0);
})
console.log(even);
const s=arr.reduce((pre,val)=>{
    return pre+val;
})
console.log(s);
let marks=[78,65,89,90,92,100];
let pass=marks.filter((val)=>{
    return val>90;
});
//console.log(pass);
/*Use the reduce method to calculate product of all numbers in the array.
Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
*/
let product=[1,2,3,4,5];
let pmul=product.reduce((prev,pres)=>{
    return prev*pres;
})
let sum1=product.reduce((prev,pres)=>{
    return prev+pres;
})
console.log(pmul);
console.log(sum1);