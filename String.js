let str='Raktim';
console.log(str.length);
console.log(str[0]+str[1]);
//Template string
let sum=`the value of 1 + 2 + 3=${1+2+3}`;
console.log(sum);

//Escape Space
let stri="Suvu";
console.log(stri.length);
let strin="Raktim\nBar";
console.log(strin.length)

console.log(stri.toUpperCase());
console.log(stri.toLowerCase());
console.log(stri.trim());
console.log(stri.slice(2,6));
console.log(stri.concat(" "+sum));
console.log(stri.charAt(3));
console.log(stri.replaceAll('u','v'));
