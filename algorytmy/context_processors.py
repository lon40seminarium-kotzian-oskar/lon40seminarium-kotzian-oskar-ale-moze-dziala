from .models import Algorytm

def algorytmy_context(request):
    return {
        'algorytmy': Algorytm.objects.all()
    }
