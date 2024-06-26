//Functions definition using arrow
/*var add=(n1,n2)=> n1+n2;
console.log("sum", add(2,3));
var sqr=(n)=>n*n;
console.log("suqre o the number is", sqr(3));
var greeting= (name)=> "Welcome to simplilearn," + " "+ name;
console.log(greeting("Vinutha"));*/

var summ = (num1, num2) => num1 + num2;
var squaree = (num) => num*num;
var welcome = () => "Welcome to JS";
var greeting = (name) => "Hello " + name;
var powerr = (num1, num2) => Math.pow(num1, num2);

// Function call
console.log(summ(5, 6));
console.log(welcome());
console.log(squaree(5));
console.log(greeting("Raj"));
