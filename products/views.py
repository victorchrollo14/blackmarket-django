from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as dj_login, logout
from django.contrib import messages
from django.http import HttpResponseRedirect

# Create your views here.


def index(request):
    return render(request, 'index1.html')


def register(request):
    if (request.method == 'POST'):
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        email = request.POST['email']
        password = request.POST['password']

        if (User.objects.filter(username=email).exists()):
            messages.info(request, "email already register , try logging in")
            return redirect('/')
        else:
            user = User.objects.create_user(
                first_name=first_name, last_name=last_name, email=email, username=email)

            user.set_password(password)
            user.save()
            return redirect('/')
    else:
        return redirect('/')


def login(request):
    if (request.method == 'POST'):
        username = request.POST['email']
        password = request.POST['password']

        user = authenticate(username=username, password=password)

        if user is not None:
            dj_login(request, user)
            return redirect('/')
        else:
            messages.info(request, 'wrong username or password')
            return redirect('/')
    else:
        return redirect('/')


def signout(request):
    logout(request)
    return redirect('/')
