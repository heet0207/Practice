from django.shortcuts import render
from .models import NE
# Create your views here.
def home(request):
    N=NE.objects.all()
    return render(request,'ho.html',{'N':N})