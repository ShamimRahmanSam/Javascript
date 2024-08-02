const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo10").innerHTML = points;

function myFunction1() {
  points.sort();
  document.getElementById("demo10").innerHTML = points;
}
function myFunction2() {
  points.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("demo10").innerHTML = points;
}
