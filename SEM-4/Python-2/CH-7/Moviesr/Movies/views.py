from django.shortcuts import render # type:ignore
from django.http import HttpResponse # type:ignore
# Create your views here.

def home(request):
    SearchTerm = request.GET.get('SearchMovies')
    return render(request,'home.html',{'SearchTerm':SearchTerm})

def about(request):
    return HttpResponse('This is a website where you can search reviews of movies.')

def signup(request):
    email = request.GET.get('email')
    return render(request,'signup.html',{'email':email})