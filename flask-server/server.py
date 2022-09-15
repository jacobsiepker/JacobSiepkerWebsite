from flask import Flask

app = Flask(__name__)

# Dots n Boxes API Route
@app.route("/test")
def test():
    return "Our API route is working successfully"

if __name__ == "__main__":
    app.run(debug=True) 