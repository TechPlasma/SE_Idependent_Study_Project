const express = require('express');
const path = require('path');
const cors = require('cors');


// const Sequelize = require('sequelize');

// const storiesDB = new Sequelize('storydb','root','password',{
//     host: 'localhost',
//     dialect: 'mysql'
// });

// storiesDB.authenticate()
// .then(() => {
//     console.log('Connection has been established with StoriesDB.');
// })
// .catch(err => {
//     console.error('Unable to connect to the database StoriesDB:',err)
// });

// // Quick example
// storiesDB.query("SELECT * FROM stories").then(stories => {
//     console.log(stories[0]);
// });



// Create Express Server
const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// "FUCK YOU CORS" Middleware
app.use(cors({origin:'*'}));


// API Routes
app.use('/api/stories',require('./routes/api/stories'));
app.use('/api/storytext', require('./routes/api/storyText'));





// Set Static Folder
app.use(express.static(path.join(__dirname,'../StorySite/dist')));

// Get Default Port Number
const PORT = process.env.PORT || 5000;

//Listen on port for requests
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));