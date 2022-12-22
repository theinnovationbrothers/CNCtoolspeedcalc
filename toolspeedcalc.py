from flask import Flask, render_template, request
import math

app = Flask(__name__)

@app.route("/")
def calculator():
    return render_template("toolspeedcalc.html")

@app.route("/", methods=["POST"])
def calculate():
    # Get the input values from the form
    fz = float(request.form["fz"])
    fn = float(request.form["fn"])
    dc = float(request.form["dc"])
    z = float(request.form["z"])
    Vc = float(request.form["Vc"])

    # Calculate n
    n = Vc * 1000 / (math.pi * dc)

    # Calculate Vf
    if fn != 0:
        Vf = fn * n
    else:
        Vf = fz * z * n

    # Render the calculator template with the calculated values
    return render_template("toolspeedcalc.html", n=n, Vf=Vf)
