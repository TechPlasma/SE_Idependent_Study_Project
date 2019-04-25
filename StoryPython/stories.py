"""
This is the stories module and supports all the REST actions for the
Stories collection
"""

# System Modules
from datetime import datetime
import json

# 3rd Party Modules
from flask import make_response,abort

import sqlalchemy as db
engine = db.create_engine('mysql+mysqldb://root:password@localhost/storydb')
connection = engine.connect()
metadata = db.MetaData()
stories = db.Table('stories',metadata,autoload=True,autoload_with=engine)
print(stories.columns.keys())

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

def read_all(limit):
    # query = db.select([stories])
    # ResultProxy = connection.execute(query)
    # ResultSet = ResultProxy.fetchall()
    # print(ResultSet)

    return STORIES

def read_one(id):
    print("storyid: ",id)
    return STORIES[0]

def create(story):
    return story