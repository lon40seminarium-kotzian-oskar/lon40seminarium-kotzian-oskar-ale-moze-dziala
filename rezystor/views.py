from django.shortcuts import render

def index(request):

    return render(request, 'rezystor/index.html', {'active' : 'rezystor'})