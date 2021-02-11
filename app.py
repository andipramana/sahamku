from flask import Flask, render_template
from models import saham_db, saham
app = Flask(__name__)


@app.route('/')
def home():
    data = saham.getAllStock(saham_db.jii70)
    return render_template('index.html', data=data)


if __name__ == '__main__':
    app.run()