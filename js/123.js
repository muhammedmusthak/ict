let name;
name = "Joe"
let age = 18
const pi = 3.14

function welcome(name){
    console.log(name+"welcome to full stack training");
}
welcome('jishnu');
let seasons = ['a','b','c','d'];
for (i in seasons){
    console.log(i,seasons[i]);
}

let names = ['aji','rahul','joan'];
for (let i of names){
    console.log(i);
}

console.log(typeof name)
console.log(typeof age)
console.log(typeof pi)
