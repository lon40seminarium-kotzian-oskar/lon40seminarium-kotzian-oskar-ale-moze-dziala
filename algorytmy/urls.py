from django.urls import path
from . import views

app_name = 'algorytmy'

urlpatterns = [
    path('', views.index, name='index'),
    path('<int:id>/', views.strona_algorytmu, name='strona_algorytmu')
]