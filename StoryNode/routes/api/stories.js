const express = require('express');
const router = express.Router();

const fakeStories = require('../../db/fakeStories');
const Sequelize = require('sequelize');

const storiesDB = new Sequelize('storydb','root','password',{
    host: 'localhost',
    dialect: 'mysql'
});

storiesDB.authenticate()
.then(() => {
    console.log('Connection has been established with StoriesDB.');
})
.catch(err => {
    console.error('Unable to connect to the database StoriesDB:',err)
});

// Gets All Stories
router.get('/',(req,res) => {
    console.log(req.query);

    // let storyReturn;
    // Quick example
    storiesDB.query("SELECT * FROM stories").then(stories => {
        // console.log(stories[0][1]);
        stories[0].forEach(element => {
            // console.log(`Editing Story ${element.id} tags`);
            element.tags = element.tags.split(',');
        });
        // console.log(stories[0]);
        // storyReturn = stories[0];
        res.json(stories[0]);
    });
    // res.json(storyReturn);
});

// Get Story By ID
router.get('/:id', (req,res) => {
    const found = fakeStories.some( fakeStory => fakeStory.id === parseInt(req.params.id));

    if(found) {
        res.json(fakeStories.filter(fakeStory => fakeStory.id === parseInt(req.params.id)));
    }else {
        res.status(400).json({msg: `No story found with the id of ${req.params.id}`});
    }
})


// Exports the Router to be used as the API URL
module.exports = router;