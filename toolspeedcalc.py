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

# Print the results
print("Content-Type: text/html")
print()
print("<p>n =", round(n, 2), "</p>")
print("<p>Vf =", round(Vf, 2), "</p>")