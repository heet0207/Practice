from django.shortcuts import render
from django.conbitrib.auth.forms import UserCreationForm # type:ignore

# Create your views here.

def signupaccount(request):
    return render(request,'account/signupaccount.html',{'form':UserCreationForm()})