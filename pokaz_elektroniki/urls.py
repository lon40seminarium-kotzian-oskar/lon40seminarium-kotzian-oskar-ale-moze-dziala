from django.urls import path

app_name = 'pokaz_elektroniki'
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:id>/', views.strona_części_elektronicznej, name = "strona_części_elektronicznej"),
]