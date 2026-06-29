from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.contrib.auth import login,logout,authenticate
from django.shortcuts import redirect
from django.db import IntegrityError
# Create your views her
   
def signupaccount(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('loginaccount')
        else:
            print(form.errors)   # Shows validation errors

    else:
        form = UserCreationForm()

    return render(request, 'signupaccount.html', {'form': form})
def logoutaccount(request):
    logout(request)
    return redirect('home')
def loginaccount(request):
    if request.method=='GET':
        return render(request,'loginaccount.html',{'form':AuthenticationForm})
    else:
        user=authenticate(username=request.POST['username'],password=request.POST['password'])
        if user is None:
            return render(request,'loginaccount.html',{'form':AuthenticationForm,'error':"username and password do not match"})
        else:
            login(request,user)
            return redirect('home')