from flask import Flask, render_template
from services import saham_services
from sources import saham_db

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/kalkulator")
def kalkulator():
    return render_template(kalkulator.__name__ + ".html")


@app.route("/kalkulator_")
def kalkulator_():
    return render_template(kalkulator_.__name__ + ".html")


@app.route("/list_saham")
def list_saham():
    data = saham_services.getAllStock(saham_db.example, '.JK')
    return render_template(list_saham.__name__ + ".html", data=data)


if __name__ == '__main__':
    app.run()
