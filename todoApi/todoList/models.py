# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class todoItem(models.Model):
    content = models.TextField()
    date = models.DateField()
    date_create = models.DateField(auto_now_add=True)
    priorityLevel = (
        (1,'trivial'),
        (2,'mild'),
        (3,'important'),
        (4,'emergency')
    )
    categoryLevel = (
        (1,'regular'),
        (2,'family'),
        (3,'school'),
        (4,'office')
    )

    priority = models.IntegerField(default=1,choices=priorityLevel)
    category = models.IntegerField(default=1,choices=categoryLevel)
    status = models.BooleanField(default=0)

    def __str__(self):
        return '{}'.format(self.content)
    