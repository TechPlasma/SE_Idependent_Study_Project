"""
This is the story text module and supports all the REST actions for the
story text collection
"""

# System Modules
from datetime import datetime

# 3rd Party Modules
from flask import make_response,abort

def get_timestamp():
    return datetime.now().strftime(("%Y-%m-%d %H:%M:%S"))

# TempData
STORIES = [
    {
        "id": 500,
        "story_text": "Brandon Sanderson"
    }
]

def read_one(id):
    print("storytextid: ",id)
    return STORIES[0]

def create(story):
    return STORIES[0]