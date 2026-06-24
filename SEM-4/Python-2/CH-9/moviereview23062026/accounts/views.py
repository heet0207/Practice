from django.shortcuts import render,redirect
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.contrib.auth.models import User
from django.db import IntegrityError

# Create your views here.
def signupaccount(request):
    if request.method=='GET':
        return render(request,'signupaccount.html',{'form':UserCreationForm})
    else:
        if request.POST['password1']==request.POST['password2']:
            try:
                user=User.objects.create_user(request.POST['username'],password=request.POST['password1'])
                user.save()
                login(request,user)
                return redirect('home')
            except IntegrityError:
                return render(request,'signupaccount.html',{'form':UserCreationForm,'error':'Username already exists'})
        else:
            return render(request,'signupaccount.html',{'form':UserCreationForm,'error':'Password mismatch'})

            