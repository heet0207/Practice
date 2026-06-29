from django.shortcuts import render,redirect
from django.http import HttpResponse
from .models import Movie,Review
from django.shortcuts import get_object_or_404
# Create your views here.
def home(request):
    searchTerm=request.GET.get('searchMovie')
    if searchTerm:
        movies=Movie.objects.filter(title__icontains=searchTerm)
    else:
        movies=Movie.objects.all()
    return render(request,'home.html',{'name':'AS',
    'searchTerm':searchTerm,'movies':movies})
def signup(request):
    email=request.GET.get('email')
    return render(request,'signup.html',
    {'email':email})
def detail(request,movie_id):
    movie=get_object_or_404(Movie,pk=movie_id)
    reviews=Review.objects.filter(movie=movie)
    return render(request,'detail.html',{'movie':movie,'reviews':reviews})
def createreview(request,movie_id):
    movie=get_object_or_404(Movie,pk=movie_id)
    if request.method=='GET':
        return render(request,'createreview.html',{'movie':movie})
    else:
        try:
            myreview=request.POST.get('myreview')
            newReview=Review()
            newReview.user=request.user
            newReview.movie=movie
            newReview.text=myreview
            newReview.watchAgain=request.POST.get('watchAgain')=='on'
            newReview.save()
            return redirect('detail',newReview.movie.id)
        except ValueError:
            return render(request,'createreview.html',{'error':'bad data'})