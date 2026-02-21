from django.shortcuts import render
from algorytmy.models import Algorytm

def index(request):

    algorytmy = Algorytm.objects.all()

    return render(request, 'home/index.html', {'active' : 'home', 'algorytmy':algorytmy})