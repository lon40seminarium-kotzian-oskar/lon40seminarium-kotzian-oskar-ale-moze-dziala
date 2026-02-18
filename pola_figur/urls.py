from django.urls import path
from . import views

app_name = 'pola_figur'

urlpatterns = [
    path('', views.index, name='index'),
]