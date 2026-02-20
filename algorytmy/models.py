from django.db import models

class Algorytm(models.Model):

    INPUT_CHOICES = [
        ("1input", "1 input"),
        ("2inputy", "2 inputy"),
        ("3inputy", "3 inputy"),
        ("4inputy", "4 inputy"),
        ("tablica1d", "Tablica 1D"),
        ("tablica2d", "Tablica 2D"),
    ]

    nazwa = models.CharField(max_length=122)
    opis = models.TextField()
    program_java_script = models.TextField()
    program_python = models.TextField(null=True, blank=True)
    program_cpp = models.TextField(null=True, blank=True)

    typ_wejscia = models.CharField(
        max_length=20,
        choices=INPUT_CHOICES,
        default="1input"
    )

    class Meta:
        verbose_name = "Algorytm"
        verbose_name_plural = "Algorytmy"

    def __str__(self):
        return self.nazwa