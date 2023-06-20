// (5) Buat router mcd cafe
const express = require('express')
const router = express.Router() 
const Mcd = require('../models/Cafe')

// Create 
router.post('/', async(req, res) => {
    // tampung input mcd cafe 
    const cafePost = new Cafe({
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    })

    try {
        // simpan data 
        const cafe = await cafePost.save()
        // response
        res.json(cafe)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const cafe = await Cafe.find()
        res.json(cafe)
    } catch (error) {
        res.json({message: error})
    }
})

router.put('/:cafeId', async(req, res) => {
    const data = {
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    }

    try{
        const cafe = await Cafe.updateOne({_id: req.params.mcdId}, data)
        res.json(cafe)
    } catch(error){
        res.json({message: error})
    }
})

router.delete('/:cafeId', async(req, res) => {
    try {
        const cafe = await Cafe.deleteOne({_id: req.params.cafeId})
        res.json(cafe)
    } catch (error){
        res.json({message: error})
    }
})

module.exports = router