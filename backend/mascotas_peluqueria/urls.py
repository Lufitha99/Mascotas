"""
URL configuration for mascotas_peluqueria project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('tienda.urls')),  # Incluye las rutas de la aplicación tienda
    path('auth/', include('djoser.urls')),  # Incluye las rutas de djoser
    path('auth/', include('djoser.urls.jwt')),  # Rutas JWT de djoser
    path('api/auth/', include('dj_rest_auth.urls')),  # Rutas de autenticación de dj_rest_auth
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')),  # Rutas de registro de dj_rest_auth
    path('accounts/', include('allauth.urls')),  # Incluye las URLs de allauth
]
