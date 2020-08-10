const actors = require('../../Actors')
const express = require('express')
const router = express.Router()

//get all members
router.get('/', (req, res) => res.json(actors))
//get actor by id
router.get('/:id', (req, res) => {
    const found = actors.some(actor => actors.indexOf(actor) === parseInt(req.params.id))
    if (found) {
        res.json(actors.filter(actor => actors.indexOf(actor) === parseInt(req.params.id)))
    } else {
        res.status(400).json({ "msg": "actor not found" })
    }
})

module.exports = router