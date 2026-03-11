"""
Dependabot test project - Python entry point
Intentionally uses outdated dependencies
"""
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return jsonify({'message': 'Dependabot test project', 'lang': 'python'})

if __name__ == '__main__':
    app.run(debug=True)
