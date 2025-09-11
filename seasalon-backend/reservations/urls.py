from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ReservationViewSet, csrf_token_view

router = DefaultRouter()
router.register(r'reservations', ReservationViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('csrf-token/', csrf_token_view),
]
