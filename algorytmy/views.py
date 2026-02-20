from django.shortcuts import render, get_object_or_404
from algorytmy.models import Algorytm

def index(request):
    algorytmy =  Algorytm.objects.all()

    return render(request, 'algorytmy/index.html', {'algorytmy': algorytmy, 'active' : 'algorytmy'})


def strona_algorytmu(request, id):
    
    algorytm = get_object_or_404(Algorytm, id=id)

    return render(request, 'algorytmy/strona_algorytmu.html', {'algorytm': algorytm, 'active':'algorytmy'})