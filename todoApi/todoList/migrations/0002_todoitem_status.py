# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-06-02 01:40
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todoList', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todoitem',
            name='status',
            field=models.BooleanField(default=0),
        ),
    ]
