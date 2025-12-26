from django.urls import path
from .views import services,Electrician,Plumber,Carpenter,Mason,Painter,Driver,Welder,Loading_Unloading,Cleaning_Housekeeping,AC_Technician,Security_Guard,Gardener,Cook,CCTV_Technician,Solar_Panel_Technician,Construction_Helper,Babysitter,Elder_Care_Assistant,Agricultural_Worker,Pest_Control_Worker


urlpatterns = [
    path('services/',services,name='services'),
    path('Electrician/',Electrician,name='Electrician'),
    path('plumber/',Plumber,name='Plumber'),
    path('carpenter/',Carpenter,name='Carpenter'),
    path('mason/',Mason,name='Mason'),
    path('painter/',Painter,name='Painter'),
    path('driver/',Driver,name='Driver'),
    path('welder/',Welder,name='Welder'),
    path('loading_unloading/',Loading_Unloading,name='Loading_Unloading'),
    path('cleaning_housekeeping/',Cleaning_Housekeeping,name='Cleaning_Housekeeping'),
    path('AC_Technician/',AC_Technician,name='AC_Technician'),
    path('security_guard/',Security_Guard,name='Security_Guard'),
    path('gardener/',Gardener,name='Gardener'),
    path('cook/',Cook,name='Cook'),
    path('CCTV_Technician/',CCTV_Technician,name='CCTV_Technician'),
    path('solar_panel_technician/',Solar_Panel_Technician,name='Solar_Panel_Technician'),
    path('construction_helper/',Construction_Helper,name='Construction_Helper'),
    path('babysitter/',Babysitter,name='Babysitter'),
    path('elder_care_assistant/',Elder_Care_Assistant,name='Elder_Care_Assistant'),
    path('agricultural_worker/',Agricultural_Worker,name='Agricultural_Worker'),
    path('pest_control_worker/',Pest_Control_Worker,name='Pest_Control_Worker'),
    
]