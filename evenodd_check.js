var a = "10hey";
if(typeof a!=='number')
    {
        console.log(" This is not a number");
    }
else if (a % 2 === 0) //always use tripple equals
{
    console.log(a, " is an even num");
}
else {
    console.log(a, " is an odd num");
}