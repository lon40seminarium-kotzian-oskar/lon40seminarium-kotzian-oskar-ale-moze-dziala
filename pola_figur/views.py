from django.shortcuts import render

def index(request):

    return render(request, 'pola_figur/index.html', {'active' : 'pola_figur'})