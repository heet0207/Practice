from django.urls import path # type: ignore
from . import views
urlpatterns=[path('<int:movie_id>',views.detail,name='detail'),
            path('<int:movie_id>/create',views.createreview,name='createreview')]