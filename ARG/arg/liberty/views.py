from django.shortcuts import render
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib.auth.decorators import login_required

# Create your views here.
def index(request):
    return render(request,"liberty/index.html")
def about(request):
    return render(request,"liberty/about.html")
def login(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["pw"]
        
        if username == "LPpersonnel" and password == "925182025":
            return  HttpResponseRedirect(reverse("archive"))
    else:
        return render(request,"liberty/login.html")

def archive(request):
    return render(request,"liberty/archive.html")