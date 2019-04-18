const express = require('express');
const router = express.Router();

const fakeStoryTexts = require('../../db/fakeStoryText');


// Gets All Stories
router.get('/', (req, res) => res.json(fakeStoryTexts));

// Get Story By ID
router.get('/:id', (req, res) => {
    const found = fakeStoryTexts.some(fakeStoryText => fakeStoryText.id === parseInt(req.params.id));

    if (found) {
        res.json(fakeStoryTexts.filter(fakeStoryText => fakeStoryText.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({ msg: `No story found with the id of ${req.params.id}` });
    }
})


// Exports the Router to be used as the API URL
module.exports = router;