import pickle

class Person:
    def __init__(self,name,age):
        self.name = name
        self.age=age
    def getAge(self):
        print(self.age)
        
person = Person("Abhinav",19)

with open("person.pkl",'wb+') as f:
    pickle.dump(person,f)

