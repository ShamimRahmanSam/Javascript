let b = 7;

scope(); //output a and text

sum(); //output NaN

sum(10, 10); //output 20 in console

function scope() {
  let a = 21;

  let text = "Shamim Rahman Sam";

  console.log(a);

  document.getElementById("valueofa").innerHTML = a;

  console.log(text);

  document.getElementById("text1").innerHTML = text;
}

let textt = "SRS";

console.log(textt);

document.getElementById("text2").innerHTML = textt;

document.getElementById("valueofb").innerHTML = b; // if b is not declared and assigned at the first in global scope then the output in console will be   ReferenceError: a is not defined..   and a is a function scope here. not global

console.log(b);

function sum(a, b) {
  return a + b;
}

let x = sum(10, 6); //output 16 in console
console.log("Total Sum is", x);

sum(); //output will be NaN in console cause there are no arguments in the sum function when it's calling back

document.getElementById("sum").innerHTML = x;

document.getElementById("scope").innerHTML = scope();
