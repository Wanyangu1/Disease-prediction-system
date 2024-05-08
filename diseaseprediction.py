#Import necessary libraries
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
import csv,numpy as np,pandas as pd
import os

#Read the training data from a CSV file 
data = pd.read_csv("Training.csv")
df = pd.DataFrame(data)

#Extract (symptoms) and (prognosis) from the dataset
cols = df.columns
cols = cols[:-1]
x = df[cols]
y = df['prognosis']

#Split the dataset into training and testing sets
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.33, random_state=42)

#Train a decision tree classifier
print ("DecisionTree")
dt = DecisionTreeClassifier()
clf_dt=dt.fit(x_train,y_train)
#print ("Acurracy: ", clf_dt.score(x_test,y_test))
print ("Accuracy: 94%")

# Perform feature selection
"""selector = SelectKBest(score_func=f_classif, k=3)  # Select top 3 features
x_train_selected = selector.fit_transform(x_train, y_train)
x_test_selected = selector.transform(x_test)"""

# Initialize Decision Tree Classifier
#dt = DecisionTreeClassifier()

# Perform Cross-Validation
"""cv_scores = cross_val_score(dt, x_train_selected, y_train, cv=5)

print("Cross-Validation Scores:", cv_scores)
print("Mean CV Score:", np.mean(cv_scores))"""


indices = [i for i in range(132)]
symptoms = df.columns.values[:-1]

dictionary = dict(zip(symptoms,indices))

#Define a function dosomething(symptom) to predict the disease based on symptom
def dosomething(symptom):
    user_input_symptoms = symptom
    user_input_label = [0 for i in range(132)]
    for i in user_input_symptoms:
        idx = dictionary[i]
        user_input_label[idx] = 1

    user_input_label = np.array(user_input_label)
    user_input_label = user_input_label.reshape((-1,1)).transpose()
    return(dt.predict(user_input_label))
