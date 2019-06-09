from rest_framework import serializers
from .models import todoItem

class todoItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = todoItem
        fields = ('id', 'content', 'date', 'date_create', 'priority', 'category', 'status')
        read_only_fields = ['date_create']