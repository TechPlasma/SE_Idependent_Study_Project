const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// "FUCK YOU CORS" Middleware
app.use(cors({origin:'*'}));


// API Routes
app.use('/api/stories',require('./routes/api/stories'));
app.use('/api/storyText', require('./routes/api/storyText'));





// Set Static Folder
app.use(express.static(path.join(__dirname,'../StorySite/dist')));

// Get Default Port Number
const PORT = process.env.PORT || 5000;

//Listen on port for requests
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));