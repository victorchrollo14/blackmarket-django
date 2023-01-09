from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User, auth
from django.contrib import messages
import time

# Create your views here.


def index(request):
    return render(request, 'index1.html')


def register(request):
    if (request.method == 'POST'):
        firstname = request.POST['firstname']
        lastname = request.POST['lastname']
        email = request.POST['email']
        password = request.POST['password']

        if (User.objects.filter(email=email).exists()):
            messages.info(request, "email already register , try logging in")
            time.sleep(10)
            return render(request, 'index1.html')
        else:
            user = User.objects.create_user(
                username=firstname, email=email, password=password)

            user.save()
            return render(request, 'index1.html')
