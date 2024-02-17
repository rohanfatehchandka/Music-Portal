
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask_restful import Api
from helpers import fact_check  # Import the fact_check function from the helpers module
import nltk

import json

import pickle
import numpy as np
import pandas as pd
from flask import Flask, render_template, request
import json
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB

app = Flask(__name__)
CORS(app)  # Initialize CORS for the entire app
api = Api(app)
app.config['CORS_HEADERS'] = 'Content-Type'

nltk.download('punkt')  # Download the required nltk data

# Route for authenticating a user query using the fact_check function
@app.route('/factcheck', methods=['POST'])
@cross_origin()  # Enable CORS for this route
def verifier():
    print("Inside the verifier at the backend")
    data = request.get_data(as_text=True)
    print("The request body is", data)
    result = fact_check(data)
    return jsonify({"result": result})

# Run the Flask app if this script is executed
if __name__ == "__main__":
    app.run(debug=True)