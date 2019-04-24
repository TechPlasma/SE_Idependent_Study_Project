"""
This is the stories module and supports all the REST actions for the
Stories collection
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
        "author": "Brandon Sanderson",
        "title": "The Way of Kings",
        "createdDate": "2019-04-02",
        "summary": "The story of Kaladin Stomblessed and his trials as a eminent Windrunner.",
        "tags": ['Adventure','Fantasy','Long']
    }
]

def read_all():
    return STORIES

def create():
    return STORIES[0]