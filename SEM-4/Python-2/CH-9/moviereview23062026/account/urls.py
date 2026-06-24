from django.urls import path # type: ignore
from . import views

urlpatterns=[
    path('signupaccount/',views.signupaccount,name='signupaccount'),
]