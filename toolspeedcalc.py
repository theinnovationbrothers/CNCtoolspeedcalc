import cgi
import math

form = cgi.FieldStorage()

# Get the input values from the form
fz = float(form.getvalue("fz"))
fn = float(form.getvalue("fn"))
dc = float(form.getvalue("dc"))
z = float(form.getvalue("z"))
Vc = float(form.getvalue("Vc"))

# Calculate n
n = Vc * 1000 / (math.pi * dc)

# Calculate Vf
if fn != 0:
    Vf = fn * n
else:
    Vf = fz * z * n

# Print the HTTP headers and HTML content
print("Content-Type: text/html")
print()
print("<html>")
print("<head>")
print("<title>CNC Tool's Speed Calculator</title>")
print("</head>")
print("<body>")
print("<h1>Results</h1>")
print("<p>n = ", n, "</p>")
print("<p>Vf = ", Vf, "</p>")
print("</body>")
print("</html>")
