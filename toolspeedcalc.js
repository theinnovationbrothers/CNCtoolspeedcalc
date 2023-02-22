var counter = 1;

// Toggle the visibility of the form
function toggleForm() {
	var form = document.getElementById("form");
	if (form.style.display === "none") {
		form.style.display = "block";
	} else {
		form.style.display = "none";
	}
}

function calculate() {

  // Get the input values from the form
  var name = document.getElementById("name").value;
  var fz = document.getElementById("fz").value;
  var fn = document.getElementById("fn").value;
  var dc = document.getElementById("dc").value;
  var z = document.getElementById("z").value;
  var Vc = document.getElementById("Vc").value;
  
  // Clear the previous error message
  document.getElementById("error-message").innerHTML = "";
  
    // Validate the input values
  if (dc === "" || z === "" || Vc === "" || fz === "" && fn === "") {
    document.getElementById("error-message").innerHTML = "Please enter missing values.";
    return false;
  }
  if (fz !== "" && fn !== "") {
	  fn = "";
  }

  // Calculate n
  var n = Vc * 1000 / (Math.PI * dc);
  console.log()

  // Calculate Vf
  var Vf;
  if (fn != 0) {
    Vf = fn * n;
  } else {
    Vf = fz * z * n;
  }
  
  // Round up the sum to two decimal places
  n = n.toFixed(2);
  Vf = Vf.toFixed(2);
  
  // Store the result in an array
  var results = [];
  results.push(n);
  
  // Display the results
  // Create the table HTML
  var tableHTML = '<table class="minimalistBlack">';
  tableHTML += '<thead><tr><th colspan="4">' + "Tool #" + counter + ": " + name + '</th></tr></thead>';
  tableHTML += '<tbody>'
  if (fz == 0 && fn != 0) {
  tableHTML += '<tr><td>' + "Diameter (Dc) [mm]:" + '</td><td>' + "Cutting Speed (Vc) [mm/min]:" +'</td><td>' + "Number of Edges (z):" + '</td><td>' + "Feed-rate per Revolution (fn) [mm/rot]:" + '</td></tr>';
  tableHTML += '<tr><td style="font-weight: bold">' + dc + '</td><td style="font-weight: bold">' + Vc + '</td><td style="font-weight: bold">' + z + '</td><td style="font-weight: bold">' + fn + '</td></tr>';
  } else if (fz != 0 && fn == 0) {
  tableHTML += '<tr><td>' + "Diameter (Dc) [mm]:" + '</td><td>' + "Cutting Speed (Vc) [mm/min]:" +'</td><td>' + "Number of Edges (z):" + '</td><td>' + "Feed-rate per Edge (fz) [mm/z]:" + '</td></tr>';
  tableHTML += '<tr><td style="font-weight: bold">' + dc + '</td><td style="font-weight: bold">' + Vc + '</td><td style="font-weight: bold">' + z + '</td><td style="font-weight: bold">' + fz + '</td></tr>';
  }
  tableHTML += '<tr><td colspan="2">' + "RPM n [r/min]:" + '</td><td colspan="2">' + "Feed rate Vf [mm/min]:" + '</td></tr>';
  tableHTML += '<tr><td colspan="2" style="font-weight: bold">' + "= " + n + '</td><td colspan="2" style="font-weight: bold">' + "= " + Vf + '</td></tr></tfoot>';
  tableHTML += '</tbody></table>';
  
  // Insert the table HTML into the div
  document.getElementById('result').innerHTML += tableHTML;
  
  // Increment the counter
  counter++;

  // Return false to prevent the form from being submitted
  return false;
}
