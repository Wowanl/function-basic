function basic (a, b, c) {
return Math.pow(a, b) +  Math.sqrt(c);
      }
var a = Number(prompt("Enter first number"));
var b = Number (prompt("Enter second number"));
var c = Number (prompt ("Enter third number"));

var result = basic (a,b,c);
alert(result);