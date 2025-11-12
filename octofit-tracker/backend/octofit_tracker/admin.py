from django.contrib import admin
from django.contrib.auth import get_user_model

# Uncomment and update the following import if these models exist in models.py
# from .models import Team, Activity, Workout, Leaderboard

# Uncomment these lines if the models exist
# admin.site.register(Team)
from django.contrib.admin.sites import AlreadyRegistered

User = get_user_model()
try:
	admin.site.register(User)
except AlreadyRegistered:
	pass
# admin.site.register(Activity)
# admin.site.register(Workout)
# admin.site.register(Leaderboard)
