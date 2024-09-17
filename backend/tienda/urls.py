from django.contrib import admin
from django.urls import path, include
from .views import UserCreateView # Importa la vista de creación de usuario
from .views import ClienteViewSet
from .views import MascotaViewSet
from .views import CitaViewSet
from .views import ProductoViewSet
from rest_framework.routers import DefaultRouter




router = DefaultRouter()
router.register(r'cliente', ClienteViewSet)
router.register(r'mascotas', MascotaViewSet)
router.register(r'citas', CitaViewSet)
router.register(r'productos', ProductoViewSet)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('register/', UserCreateView.as_view(), name='user-register'),
    path('api/auth/', include('dj_rest_auth.urls')),  # Rutas de autenticación
    path('auth/register/', include('dj_rest_auth.registration.urls')),
    path('accounts/', include('allauth.urls')),  # Incluye las URLs de allauth
]

