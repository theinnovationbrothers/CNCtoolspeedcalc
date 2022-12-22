function calculate() {
  // Get the input values from the form
  var fz = document.getElementById("fz").value;
  var fn = document.getElementById("fn").value;
  var dc = document.getElementById("dc").value;
  var z = document.getElementById("z").value;
  var Vc = document.getElementById("Vc").value;

  // Calculate n
  var n = Vc * 1000 / (Math.PI * dc);

  // Calculate Vf
  var Vf;
  if (fn != 0) {
    Vf = fn * n;
  } else {
    Vf = fz * z * n;
  }

  // Display the results
  document.write("<h1>Results</h1>");
  document.write("<p>n = " + n + "</p>");
  document.write("<p>Vf = " + Vf + "</p>");
}
