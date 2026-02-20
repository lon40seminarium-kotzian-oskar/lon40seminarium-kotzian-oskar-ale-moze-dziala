from django.shortcuts import render
from algorytmy.models import Algorytm

def index(request):
    algorytmy =  algorytm.objects.all()

    return render(request, 'algorytm/index.html', {'algorytmy': algorytmy, 'active' : 'algorytmy'})


def strona_algorytmu(request, id):
    pass