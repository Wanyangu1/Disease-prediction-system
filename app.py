#importing neccesary python modules
import csv
from flask import Flask, render_template,request,redirect,url_for
import diseaseprediction

#create the flask application instan
app = Flask(__name__)

#open the csv file and read the contents
with open('Testing.csv', newline='') as f:
        reader = csv.reader(f)
        symptoms = next(reader)
        symptoms = symptoms[:len(symptoms)-1]

#define the roots for different functionality
        #Define a function for rendering a form to select symptoms
@app.route('/', methods=['GET'])
def dropdown():
        return render_template('includes/predict.html', symptoms=symptoms)

#handle prediction based on selected sysmptoms
@app.route('/disease_predict', methods=['POST'])

#Define a function for disease prediction
def disease_predict():
    selected_symptoms = []
    if(request.form['Symptom1']!="") and (request.form['Symptom1'] not in selected_symptoms):
        selected_symptoms.append(request.form['Symptom1'])
    if(request.form['Symptom2']!="") and (request.form['Symptom2'] not in selected_symptoms):
        selected_symptoms.append(request.form['Symptom2'])
    if(request.form['Symptom3']!="") and (request.form['Symptom3'] not in selected_symptoms):
        selected_symptoms.append(request.form['Symptom3'])
    if(request.form['Symptom4']!="") and (request.form['Symptom4'] not in selected_symptoms):
        selected_symptoms.append(request.form['Symptom4'])
    if(request.form['Symptom5']!="") and (request.form['Symptom5'] not in selected_symptoms):
        selected_symptoms.append(request.form['Symptom5'])


    disease = diseaseprediction.dosomething(selected_symptoms)
    return render_template('disease_predict.html',disease=disease,symptoms=symptoms)

#Run the Flask app in debug mode
if __name__ == '__main__':
    app.run(debug=True)
    app.run(host='0.0.0.0', port=5000)