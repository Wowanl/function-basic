



function square (a, b, c) {
    var d = Math.pow(b, 2) - 4 * a * c;
    console.log(d);
    var x1;
    var x2;
    if (d >= 0) {
        var x1 = (Math.sqrt(d) + (-b)) / (2 * a);
        console.log(x1);
        var x2 = ((-b) - Math.sqrt(d)) / (2 * a);
        console.log(x2);
    } else {
        alert("impossible to resolve")
    };
   return alert ( "x1 = " + x1 + " "+  "x2 = " + x2);

     };

var a = Number(prompt("Enter first number A"));
var b = Number (prompt("Enter second number B"));
var c = Number (prompt ("Enter third number C"))

square(a, b, c);



/*

function basic (a, b, c) {
return Math.pow(a, b) +  Math.sqrt(c);
      }
var a = Number(prompt("Enter first number"));
var b = Number (prompt("Enter second number"));
var c = Number (prompt ("Enter third number"));

var result = basic (a,b,c);
alert(result);
*/