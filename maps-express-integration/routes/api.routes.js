const express = require('express')
const router = express.Router()

const Restaurant = require('./../models/restaurant.model')

router.get('/restaurants', (req, res) => {

    Restaurant
        .find()
        .then(response => res.json(response))
        .catch(err => console.log(err))


    // Restaurant
    //     .find()
    //     .then(response => response.length ? res.json(response) : res.status(204).json({ status: 204, message: 'No restaurants found' }))
    //     .catch(err => res.status(500).json({ status: 500, message: err }))
})

module.exports = router