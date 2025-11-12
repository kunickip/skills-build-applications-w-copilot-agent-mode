from django.core.management.base import BaseCommand
from djongo import models
from pymongo import MongoClient

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Połączenie z MongoDB
        client = MongoClient('localhost', 27017)
        db = client['octofit_db']

        # Usuń stare dane
        db.users.delete_many({})
        db.teams.delete_many({})
        db.activities.delete_many({})
        db.leaderboard.delete_many({})
        db.workouts.delete_many({})

        # Dodaj indeks unikalny na email
        db.users.create_index([('email', 1)], unique=True)

        # Dodaj zespoły
        marvel = db.teams.insert_one({'name': 'Marvel'})
        dc = db.teams.insert_one({'name': 'DC'})

        # Dodaj użytkowników
        users = [
            {'name': 'Spider-Man', 'email': 'spiderman@marvel.com', 'team': 'Marvel'},
            {'name': 'Iron Man', 'email': 'ironman@marvel.com', 'team': 'Marvel'},
            {'name': 'Batman', 'email': 'batman@dc.com', 'team': 'DC'},
            {'name': 'Wonder Woman', 'email': 'wonderwoman@dc.com', 'team': 'DC'},
        ]
        db.users.insert_many(users)

        # Dodaj aktywności
        activities = [
            {'user': 'spiderman@marvel.com', 'type': 'run', 'duration': 30, 'calories': 300, 'date': '2025-11-12'},
            {'user': 'ironman@marvel.com', 'type': 'cycle', 'duration': 45, 'calories': 500, 'date': '2025-11-11'},
            {'user': 'batman@dc.com', 'type': 'swim', 'duration': 60, 'calories': 400, 'date': '2025-11-10'},
            {'user': 'wonderwoman@dc.com', 'type': 'run', 'duration': 25, 'calories': 250, 'date': '2025-11-09'},
        ]
        db.activities.insert_many(activities)

        # Dodaj treningi
        workouts = [
            {'name': 'Cardio Blast', 'description': 'Intense cardio workout', 'difficulty': 'Medium'},
            {'name': 'Strength Builder', 'description': 'Build muscle strength', 'difficulty': 'Hard'},
        ]
        db.workouts.insert_many(workouts)

        # Dodaj leaderboard
        leaderboard = [
            {'team': 'Marvel', 'points': 800},
            {'team': 'DC', 'points': 650},
        ]
        db.leaderboard.insert_many(leaderboard)

        self.stdout.write(self.style.SUCCESS('octofit_db database populated with test data'))
