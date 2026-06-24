from django.urls import path
from news import views as NewsViews
urlpatterns=[path('',NewsViews.home,name='ho')]