const express = require('express')
const path = require('path')
const cors = require('cors')
app = express()

// Set static folders
app.use(cors())
app.use(express.static(path.join(__dirname, 'static')))
app.use(function(req, res, next) {
    console.log(`${new Date()} - ${req.method} request for ${req.url}`);
    next();
});
//Set api routes
app.use('/api/actors', require('./routes/api/actors'))

//Set home route
app.get('/', (req, res) => {
        // res.sendFile(path.join(__dirname, 'public', 'index.html'))
        res.sendFile(path.join(__dirname, 'static', 'index.html'))
})


const PORT = process.env.PORT || 50005


app.listen(PORT, () => console.log(`listening on port ${PORT}`))