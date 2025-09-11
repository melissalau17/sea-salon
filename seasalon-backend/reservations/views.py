from django.shortcuts import render
from rest_framework import viewsets, status
from .models import Reservation
from .serializers import ReservationSerializer
from django.http import JsonResponse
from django.middleware.csrf import get_token
from rest_framework.decorators import action
from rest_framework.response import Response

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer

    def create(self, request, *args, **kwargs):
        serializer = ReservationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['get'])
    def csrf_token_view(self, request):
        return JsonResponse({'csrfToken': get_token(request)})
