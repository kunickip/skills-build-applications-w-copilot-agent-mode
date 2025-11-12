# models.py

from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Team(models.Model):
    name = models.CharField(max_length=100)
    members = models.ManyToManyField(User, related_name='teams')

class Activity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity_type = models.CharField(max_length=100)
    duration = models.IntegerField()  # duration in minutes
    date = models.DateField()

class Workout(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    workout_type = models.CharField(max_length=100)
    intensity = models.CharField(max_length=50)
    date = models.DateField()

class Leaderboard(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    score = models.IntegerField()