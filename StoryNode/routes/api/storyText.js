const express = require('express');
const router = express.Router();

const fakeStoryTexts = require('../../db/fakeStoryText');
const Sequelize = require('sequelize');

const storiesDB = new Sequelize('storydb', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

storiesDB.authenticate()
.then(() => {
    console.log('Connection has been established with StoriesDB.');
})
.catch(err => {
    console.error('Unable to connect to the database StoriesDB:', err)
});

const Stories = storiesDB.define('stories', {
    id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
    title: { type: Sequelize.STRING, allowNull: false },
    author: { type: Sequelize.STRING, allowNull: false },
    createdDate: { type: Sequelize.DATE, allowNull: true },
    summary: { type: Sequelize.TEXT, allowNull: false },
    tags: { type: Sequelize.TEXT, allowNull: false }
}, {
    freezeTableName: true,
    timestamps: false
});

const StoryBodies = storiesDB.define('story_text', {
    id: { type: Sequelize.INTEGER, allowNull: false,primaryKey:true},
    story_text: { type: Sequelize.TEXT('long'), allowNull: false }
}, {
    freezeTableName: true,
    timestamps: false
});




// Gets All Stories
router.get('/', (req, res) => res.json(fakeStoryTexts));

// // Get Story By ID
// router.get('/:id', (req, res) => {
//     const found = fakeStoryTexts.some(fakeStoryText => fakeStoryText.id === parseInt(req.params.id));

//     if (found) {
//         res.json(fakeStoryTexts.filter(fakeStoryText => fakeStoryText.id === parseInt(req.params.id)));
//     } else {
//         res.status(400).json({ msg: `No story found with the id of ${req.params.id}` });
//     }
// })

// Get StoryBody By ID
router.get('/:id', (req, res) => {
    StoryBodies.findAll({ where: { id: req.params.id } }).then(storyList => {
        if (storyList.length > 0) {
            // console.log(storyList);
            res.json(storyList[0]);
        } else {
            res.status(400).json({ msg: `No story found with the id of ${req.params.id}` });
        }
    });
});

// Post Story Text
router.post('/', (req, res) => {
    const newStoryText = {
        id: req.body.storyText.id,
        story_text: req.body.storyText.story_text
    }

    console.log("POST DETECTED");
    console.log(req.body);

    StoryBodies.create(newStoryText).then(newBodyEntry => {
        res.json(newBodyEntry);
    })
});

// Exports the Router to be used as the API URL
module.exports = router;