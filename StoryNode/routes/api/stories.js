const express = require('express');
const router = express.Router();

const fakeStories = require('../../db/fakeStories');
const Sequelize = require('sequelize');

// const storiesDB = new Sequelize('storydb','root','password',{
//     host: 'localhost',
//     dialect: 'mysql'
// });

const storiesDB = new Sequelize('techplasma','techplasma','KOGoQzl43dFy9Rxj',{
    host: 'easel2.fulgentcorp.com',
    dialect: 'mysql'
});

storiesDB.authenticate()
.then(() => {
    console.log('Connection has been established with StoriesDB.');
})
.catch(err => {
    console.error('Unable to connect to the database StoriesDB:',err)
});


const Stories = storiesDB.define('stories',{
    id:{type: Sequelize.INTEGER,allowNull: false,primaryKey:true,autoIncrement:true},
    title: {type: Sequelize.STRING,allowNull:false},
    author: {type: Sequelize.STRING,allowNull:false},
    createdDate: {type:Sequelize.DATE,allowNull:true},
    summary: {type:Sequelize.TEXT,allowNull:false},
    tags: {type:Sequelize.TEXT,allowNull:false}
},{
    timestamps: false
});


// Get All Stories
router.get('/',(req,res) => {
    if('limit' in req.query){
        req.query.limit = parseInt(req.query.limit);
    }
    req.query.order = [['createdDate', 'DESC']];
    console.log("Query: ",req.query);


    Stories.findAll(req.query).then( storyList => {
        res.json(storyList);
    });
});

// Get Story By ID
router.get('/:id', (req,res) => {
    Stories.findAll({where:{id:req.params.id}}).then( storyList => {
        if(storyList.length>0){
            res.json(storyList[0]);
        }else{
            res.status(400).json({msg: `No story found with the id of ${req.params.id}`});
        }
    });
});

// Post Story
router.post('/',(req,res) => {
    const newStory = {
        title: req.body.story.title,
        author: req.body.story.author,
        summary: req.body.story.summary,
        tags: req.body.story.tags
    }

    console.log("POST DETECTED");
    console.log(req.body);

    Stories.create(newStory).then(storyEntry => {
        res.json(storyEntry);
    });
});


// Exports the Router to be used as the API URL
module.exports = router;