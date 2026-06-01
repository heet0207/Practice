from django.shortcuts import render # type:ignore

# Create your views here.

def movie(request):
    return render(request,'home.html')