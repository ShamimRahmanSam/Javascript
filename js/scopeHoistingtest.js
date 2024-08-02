console.log("scope & Hoisting testing...");

const s = 100;
console.log(s);

var x = 23;
console.log(x);

myFunc();
function myFunc() {
  x = 10;
  console.log(x);

  var x = 100;
  console.log(x);

  function myFunc2() {
    x = 99;
    console.log(x);
  }
  myFunc2();

  function myFunc3() {
    x = 999;
    console.log(x);

    function myFunc4() {
      x = 9999;
      console.log(x);

      function myFunc5() {
        var x = 99999;
        console.log(x);
      }
      myFunc5();
    }
    myFunc4();
  }
  myFunc3();
}
myFunc();

myFunc6();

function myFunc6() {
  let x = 999990;
  console.log(x);

  function myFunc7() {
    var x = 9999999;
    console.log(x);
  }
  myFunc7();
}
myFunc6();

console.log(x);

console.log(s);
