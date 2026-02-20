from django.shortcuts import render
from . import Algorytm 

def index(request):
    algorytmy =  Algorytm.objects.all()

    return render(request, 'algorytm/index.html', {'algorytmy': algorytmy, 'active' : 'algorytmy'})


def strona_algorytmu(request, id):
    pass