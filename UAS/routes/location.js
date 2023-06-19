// (5) Buat router location
const express = require('express')
const router = express.Router() 
const Location = require('../models/Location')
const verifyToken = require('../config/verifyToken')

// Create 
router.post('/', async(req, res) => {
    // tampung input location
    const locationPost = new Location({
        lokasi: req.body.lokasi,
        kota: req.body.kota,
        drivethru: req.body.drivethru
    })

    try {
        // simpan data 
        const location = await locationPost.save()
        // response
        res.json(location)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const location = await Location.find()
        res.json(location)
    } catch (error) {
        res.json({message: error})
    }
})

router.put('/:locationId', async(req, res) => {
    const data = {
        lokasi: req.body.lokasi,
        kota: req.body.kota,
        drivethru: req.body.drivethru
    }

    try{
        const location = await Location.updateOne({_id: req.params.locationId}, data)
        res.json(location)
    } catch(error){
        res.json({message: error})
    }
})

router.delete('/:locationId', async(req, res) => {
    try {
        const location = await Location.deleteOne({_id: req.params.locationId})
    } catch (error){
        res.json({message: error})
    }
})

module.exports = router