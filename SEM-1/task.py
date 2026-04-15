# function to calculate factorial

def factorial(n):
    if n < 0:
        raise ValueError("Factorial is not defined for negative numbers")
    elif n == 0 or n == 1:
        return 1
    else:
        result = 1
        for i in range(2, n + 1):
            result *= i
        return result
    

class c8:
    pass

class d:
    x=5
e=d()
print(e.x)

class p:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
p1=p("Alice", 30)
print(p1.name)
print(p1.age)

class human:
    species = 'Homo sapiens'
h=human()
print(h.species)

class human:
    species = 'Homo sapiens'
    def __init__(self, name, age,gender):
        self.name = name
        self.age = age
        self.gender = gender
    def speak(self):
        return "Bark"
h1 = human("John", 25,"Male")
print(h1.species)
print(h1.speak())
print(h1.name)
print(h1.age)
print(h1.gender)


class empl:
    def display(self):
        print('Inside Display')
empl1=empl()
empl1.display()

class C:
    def __init__(self):
        self.name='pyt'
        self.address='abc'
    def show(self):
        print(self.name,self.address)
cmp=(C)
cmp.show()

class Emp:
    def __init__(self,n,a,s):
        self.n=n
        self.a=a
        self.s=s
    
    def show(self):
        print(self.n,self.a,self.s)

emm=Emp('Emma',23,7500)
emm.show()
ke=Emp('Kelly',25,8500)
ke.show()


class Emp:
    def __init__(self,name,salary,project):
        self.name=name
        self.salary=salary
        self.project=project
    def show(self):
        print(self.name,self.salary)
    def work(self):
        print(self.name,self.project)

emp=Emp('J',8500,'NLP')
emp.show()
emp.work()

class s:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    def get_age(self):
        return self.age
    def set_age(self):
        self.age = age
        return self.age
sru=s('Jessa',16)
print(sru.name,sru.get_age())
sst=ru.set_age(26)
print(sru.name,st)


