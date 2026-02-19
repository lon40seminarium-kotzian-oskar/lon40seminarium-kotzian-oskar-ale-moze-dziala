from django.urls import path
from . import views

app_name = 'operacje_na_ulamkach'

urlpatterns = [
    path('', views.index, name='index'),
]