const express = require('express');
const router = express.Router();

const fakeStories = require('../../db/fakeStories');


// Gets All Stories
router.get('/',(req,res) => res.json(fakeStories));

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