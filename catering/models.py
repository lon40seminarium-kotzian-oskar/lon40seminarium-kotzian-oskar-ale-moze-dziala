from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Zamowienie(models.Model):

    nazwa = models.CharField(max_length=30)
    ulica = models.CharField(max_length=30)
    nr = models.IntegerField()
    waga = models.IntegerField()
    telefon = PhoneNumberField()
    data = models.DateField()
    dodatek = models.TextField()

    class Meta:
        verbose_name = "zamowienie"
        verbose_name_plural = "Zamowienia"
