from django.shortcuts import render

def index(request):

    return render(request, 'operacje_na_ulamkach/index.html', {'active' : 'operacje_na_ulamkach'})