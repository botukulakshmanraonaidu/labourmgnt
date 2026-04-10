from django.shortcuts import render

# Create your views here.

def services(request):
    return render(request,'services/services.html')

def Electrician(request):
    return render(request,'services/Electrician.html')  

def Plumber(request):
    return render(request,'services/Plumber.html')

def Carpenter(request):
    return render(request,'services/Carpenter.html')

def Mason(request):
    return render(request,'services/Mason.html')

def Painter(request):
    return render(request,'services/Painter.html')

def Driver(request):
    return render(request,'services/Driver.html')

def Welder(request):
    return render(request,'services/Welder.html')

def Loading_Unloading(request): 
    return render(request,'services/Loading_Unloading.html')

def Cleaning_Housekeeping(request): 
    return render(request,'services/Cleaning_Housekeeping.html')

def AC_Technician(request): 
    return render(request,'services/AC_Technician.html')

def Security_Guard(request):
    return render(request,'services/Security_Guard.html')

def Gardener(request):
    return render(request,'services/Gardener.html')

def Cook(request):
    return render(request,'services/Cook.html')

def CCTV_Technician(request):
    return render(request,'services/CCTV_Technician.html')

def Solar_Panel_Technician(request):
    return render(request,'services/Solar_Panel_Technician.html')

def Construction_Helper(request):
    return render(request,'services/Construction_Helper.html')

def Babysitter(request):
    return render(request,'services/Babysitter.html')

def Elder_Care_Assistant(request):
    return render(request,'services/Elder_Care_Assistant.html')

def Agricultural_Worker(request):
    return render(request,'services/Agricultural_Worker.html')

def Pest_Control_Worker(request):
    return render(request,'services/Pest_Control_Worker.html') 