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

import sqlalchemy as db
# engine = db.create_engine('mysql+mysqldb://root:password@localhost/storydb')
engine = db.create_engine('mysql+mysqldb://techplasma:KOGoQzl43dFy9Rxj@easel2.fulgentcorp.com/techplasma')
connection = engine.connect()
metadata = db.MetaData()
story_textDB = db.Table('story_text',metadata,autoload=True,autoload_with=engine)
print(story_textDB.columns.keys())

# Marshmallow (For Serialization)
from marshmallow import Schema, fields

class StoryTextSchema(Schema):
    id = fields.Int(dump_only=True)
    story_text = fields.Str(required=True)

story_text_schema = StoryTextSchema()
story_texts_schema = StoryTextSchema(many=True)

# TempData
STORIES = [
    {
        "id": 500,
        "story_text": "Brandon Sanderson"
    }
]

def read_one(id):
    query = db.select([story_textDB]).where(story_textDB.columns.id == id)
    ResultProxy = connection.execute(query)
    ResultSet = ResultProxy.fetchall()

    print(ResultSet)

    story_text_result = story_texts_schema.dump(ResultSet).data

    print(story_text_result)

    if story_text_result is not None:
        # for story in storyset:
        #     story["tags"] = story["tags"].split(",")
        return story_text_result[0]
    else:
        abort(404, 'Story not found for Id: {id}'.format(id=id))

def create(storytext):
    print(storytext)
    storytext = storytext['storytext']
    print(storytext)

    query = db.insert(story_textDB).values(id = storytext['id'],story_text = storytext['story_text'])
    ResultProxy = connection.execute(query)

    return storytext