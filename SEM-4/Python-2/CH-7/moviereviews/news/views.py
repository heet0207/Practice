from django.shortcuts import render
from .models import News
# Create your views here.
def news(request):
    n = News.objects.all()
    return render(request, 'news.html',{'newss':n})
