from django.contrib import admin
from .models import Algorytm

@admin.register(Algorytm)
class AlgorytmAdmin(admin.ModelAdmin):
    list_display = ("nazwa", "typ_wejscia")
    search_fields = ("nazwa", "opis")
    ordering = ("nazwa",)