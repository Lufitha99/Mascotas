from django.contrib import admin
from .models import Cliente, Mascota, Cita, Producto



# Register your models here.
admin.site.register(Cliente)
admin.site.register(Mascota)
admin.site.register(Cita)
admin.site.register(Producto)


