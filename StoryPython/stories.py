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
# engine = db.create_engine('mysql+mysqldb://root:password@localhost/storydb')
engine = db.create_engine('mysql+mysqldb://techplasma:KOGoQzl43dFy9Rxj@easel2.fulgentcorp.com/techplasma')
connection = engine.connect()
metadata = db.MetaData()
stories = db.Table('stories',metadata,autoload=True,autoload_with=engine)
print(stories.columns.keys())

# Marshmallow (For Serialization)
from marshmallow import Schema, fields

class StorySchema(Schema):
    id = fields.Int(dump_only=True)
    author = fields.Str(required=True)
    title = fields.Str(required=True)
    createdDate = fields.DateTime(dump_only=True)
    summary = fields.Str(required=True)
    tags = fields.Str(required=True)

story_schema = StorySchema()
storys_schema = StorySchema(many=True)


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

def read_all(limit = -1):
    # if(where is not None):
    #     query = db.select([stories]).order_by(db.desc(stories.columns.id))
    # else:
    query = db.select([stories]).order_by(db.desc(stories.columns.id))

    ResultProxy = connection.execute(query)
    ResultSet = ResultProxy.fetchall()
    print(ResultSet)

    storyset = storys_schema.dump(ResultSet).data
    # print("\n",storyset,"\n")

    # for story in storyset:
    #     story["tags"] = story["tags"].split(",")

    if(limit > 0):
        storyset = storyset[:limit]

    return storyset
    # return STORIES

def read_one(id):
    query = db.select([stories]).where(stories.columns.id == id)
    ResultProxy = connection.execute(query)
    ResultSet = ResultProxy.fetchall()

    storyset = storys_schema.dump(ResultSet).data

    print(storyset)

    if storyset is not None:
        # for story in storyset:
        #     story["tags"] = story["tags"].split(",")
        return storyset[0]
    else:
        abort(404, 'Story not found for Id: {id}'.format(id=id))

    # print("storyid: ",id)
    # return STORIES[0]

def create(story):
    story = story['story']
    print(story)

    query = db.insert(stories).values(title = story['title'],author = story['author'],summary = story['summary'],tags = story['tags'])
    ResultProxy = connection.execute(query)
    # ResultSet = ResultProxy.fetchall()
    print()
    print("RESULT PROXY: ",ResultProxy.inserted_primary_key)
    print()

    query = db.select([stories]).where(stories.columns.id == ResultProxy.inserted_primary_key)
    ResultProxy = connection.execute(query)
    ResultSet = ResultProxy.fetchall()

    storyset = storys_schema.dump(ResultSet).data

    return storyset[0]