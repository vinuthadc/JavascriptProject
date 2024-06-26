//var num = "hello";
//var num= 1;
//var num= -10;
var num= 2;

if (typeof num !== 'number') {
    console.log("It is not a number at all");
}

else if (num === 1) {
    console.log(num, "Number is not prime or composite");
}

else if (num > 1) {
    for (var i = 2; i<=num/2; i++) {
        if (num % i === 0) {

            console.log(num, "is not prime");
            break;
        }
        else {
            console.log(num, "is prime");
            break;
        }
    }
}
else {
    console.log(num, " is negative number");
}