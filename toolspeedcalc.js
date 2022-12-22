function calculate() {
  console.log()
  // Get the input values from the form
  var fz = document.getElementById("fz").value;
  var fn = document.getElementById("fn").value;
  var dc = document.getElementById("dc").value;
  var z = document.getElementById("z").value;
  var Vc = document.getElementById("Vc").value;

  // Calculate n
  var n = Vc * 1000 / (Math.PI * dc);
  console.log()

  // Calculate Vf
  var Vf;
  if (fn != 0) {
    Vf = fn * n;
    console.log()
  } else {
    Vf = fz * z * n;
    console.log()
  }

  // Display the results
  document.getElementById("n").innerHTML = "Result: " + n;
  document.getElementById("Vf").innerHTML = "Result: " + Vf;
}
