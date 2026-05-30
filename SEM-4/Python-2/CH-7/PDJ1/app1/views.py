from django.shortcuts import render # type: ignore
from django.http import HttpResponse # type: ignore
# Create your views here.

def home(request):
    return HttpResponse('<h1> This is new Project </h1>')
