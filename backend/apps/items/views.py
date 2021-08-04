from django.shortcuts import render
from rest_framework import generics, filters
from .serializers import ItemSerializer
from .models import Item


class ItemList(generics.ListAPIView):
    queryset = Item.objects.order_by('created_at').reverse().filter(status='active')
    serializer_class = ItemSerializer
