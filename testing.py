from sklearn.metrics import classification_report, confusion_matrix
import pickle
import sklearn
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OrdinalEncoder

with open("./server/Model.pkl", 'rb') as p:
    model = pickle.load(p)

data = pd.read_csv('withNull.csv')
X_enc = data.copy()
X_enc.pop('Years of employment')
y = X_enc.pop('Type of loan')
X_enc.fillna('ffill', inplace=True)
# f = model.predict(X_enc)
# print(f)


enc = OrdinalEncoder()
# train = enc.fit_transform(X_enc,y)

X_train, X_test, y_train, y_test = train_test_split(
    X_enc, y, test_size=0.1, stratify=y)

pred = model.predict([[1, "critical account/other loans existing (not at this bank)", "Purchase of furniture/equipment",  3780, "none", "male and divorced/seperated", 2, 35,
                     "no current account", "less than 100", 3, "none", "Yes", "Yes", 18, "car or other property", "management/ self-employed/highly qualified employee/ officer", "own", 2]])
print(pred)
print(X_test.head(1).T)
# sns.heatmap(confusion_matrix(y_test,pred),annot=True)
# print(classification_report(y_test, pred))
