from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index1'),   # root url
    path('register', views.register, name='register')
]
