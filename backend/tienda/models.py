from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Cliente(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    direccion = models.CharField(max_length=255)
    telefono = models.CharField(max_length=15)

    def __str__(self):
        return self.user.username

class Mascota(models.Model):
    OPCIONES_ANIMAL = [
        ('Perro', 'Perro'),
        ('Gato', 'Gato')
    ]
    nombre = models.CharField(max_length=100)
    raza = models.CharField(max_length=100)
    edad = models.IntegerField()
    tipo = models.CharField(choices=OPCIONES_ANIMAL, max_length=5)
    propietario = models.ForeignKey(Cliente, on_delete=models.CASCADE)

class Cita(models.Model):
    mascota = models.ForeignKey(Mascota, on_delete=models.CASCADE)
    fecha = models.DateTimeField()
    servicio = models.CharField(max_length=100)

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField()

    def __str__(self):
        return self.nombre
