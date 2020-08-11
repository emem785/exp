const express = require('express')
const path = require('path')
const cors = require('cors')
const mongoose = require("mongoose")
require('dotenv/config')
app = express()

// Set static folders
app.use(cors())
app.use(express.json())
// app.use(express.static(path.join(__dirname, 'static')))

app.use(function (req, res, next) {
    console.log(`${new Date()} - ${req.method} request for ${req.url}`);
    // console.log(`${req.body.title} - ${req.method}`)
    next();
});
//Set api routes
app.use('/api/todo', require('./routes/api/todo'))

//Set home route
app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public', 'index.html'))
    // res.sendFile(path.join(__dirname, 'static', 'index.html'))
    res.json({ msg: "nah" })
})

mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
try {
    mongoose.connect(process.env.DB_CONNECTION, () => console.log('connected to db'))
} catch (error) {
    console.log(error)

}

const PORT = process.env.PORT || 50005


app.listen(PORT, () => console.log(`listening on port ${PORT}`))