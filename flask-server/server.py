from flask import Flask

app = Flask(__name__)

# Test API Route
@app.route("/test") # must return JSON
def test():
    return ({"Test": "API Successful==========================================="})

if __name__ == "__main__":
    app.run(debug=True)