from django.shortcuts import render
from django.conbitrib.auth.forms import UserCreationForm # type:ignore
from django.contrib.auth import login,authenticate # type:ignore
from django.shortcuts import redirect # type:ignore
from django.contrib.auth.models import User # type:ignore
# Create your views here.

def signupaccount(request):
    if request.method=='GET':
        return render(request,'signupaccount.html',{'form':UserCreationForm()})
    else:
        if request.POST['password1']==request.POST['password2']:
            try:
                user=User.objects.create_user(username=request.POST['username'],password=request.POST['password1'])
                user.save()
                login(request,user)
                return redirect('home')
            except:
                return render(request,'signupaccount.html',{'form':UserCreationForm(),'error':'Username already exists'})
        else:
            return render(request,'signupaccount.html',{'form':UserCreationForm(),'error':'Password did not match'})