var a=parseFloat(prompt("Enter the First Value"));
var b=parseInt(prompt("Enter the Second Value"));
var c=prompt("Enter the operator");
switch(c)
{
    case '+':
        document.getElementById("result").textContent=(a+b);
        break;
    case '-':
        document.getElementById("result").textContent=(a-b);
        break;
    case '*':
        document.getElementById("result").textContent=(a*b);
        break;
    case '/':
        document.getElementById("result").textContent=(a/b);
        break;
}
