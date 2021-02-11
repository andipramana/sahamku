from flask import Flask, render_template
from models import saham
from sources import saham_db

app = Flask(__name__)


@app.route('/')
def home():
    data = saham.getAllStock(saham_db.jii70, '.JK')
    return render_template('index.html', data=data)


if __name__ == '__main__':
    app.run()
