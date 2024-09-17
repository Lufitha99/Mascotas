from django.urls import path,include
from . import views

from .views import CurrentUserView
from rest_framework.routers import DefaultRouter
from .views import UserViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)


urlpatterns= [
    path('current-user/', CurrentUserView.as_view(), name='current-user'),
     path('', include(router.urls)),
]

urlpatterns += [
     path('home/', views.HomeView.as_view(), name ='home'),
     path('logout/', views.LogoutView.as_view(), name ='logout')
]