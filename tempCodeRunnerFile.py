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