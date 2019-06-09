# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from rest_framework import generics
from .serializers import todoItemSerializer
from .models import todoItem

# Create your views here.

# todoView is used to retrieve, update and delete a record
class todoView(generics.RetrieveUpdateDestroyAPIView):
    queryset = todoItem.objects.all()
    serializer_class = todoItemSerializer
    

# createView can get all objects and create mission
class createView(generics.ListCreateAPIView):
    queryset = todoItem.objects.all()
    serializer_class = todoItemSerializer
    def perform_create(self,serializer):
        serializer.save()