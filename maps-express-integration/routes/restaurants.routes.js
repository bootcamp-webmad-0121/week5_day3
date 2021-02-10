const express = require('express')
const router = express.Router()

const Restaurant = require('./../models/restaurant.model')

// Endpoints
router.get('/listado', (req, res) => res.render('restaurants-list'))

router.get('/crear', (req, res) => res.render('new-restaurant'))
router.post('/crear', (req, res) => {

    const { name, description, latitude, longitude } = req.body

    const location = {
        type: 'Point',
        coordinates: [latitude, longitude]
    }

    Restaurant
        .create({ name, description, location })
        .then(() => res.redirect('/restaurantes/listado'))
        .catch(err => console.log(err))
})

module.exports = router