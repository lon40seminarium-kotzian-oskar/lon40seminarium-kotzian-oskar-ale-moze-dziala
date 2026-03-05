from django.urls import path
from . import views

app_name = 'rezystor'

urlpatterns = [
    path('', views.index, name='index'),
]