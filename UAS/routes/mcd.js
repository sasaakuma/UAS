// (5) Buat router mcd
const express = require('express')
const router = express.Router() 
const Mcd = require('../models/Mcd')

// Create 
router.post('/', async(req, res) => {
    // tampung input mcd
    const mcdPost = new Mcd({
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    })

    try {
        // simpan data 
        const mcd = await mcdPost.save()
        // response
        res.json(mcd)
    } catch (error) {
        res.json({message: error})
    }
})

// Read
router.get('/', async(req, res) => {
    try {
        const mcd = await Mcd.find()
        res.json(mcd)
    } catch (error) {
        res.json({message: error})
    }
})

router.put('/:mcdId', async(req, res) => {
    const data = {
        nama: req.body.nama,
        harga: req.body.harga,
        gambar: req.body.gambar
    }

    try{
        const mcd = await Mcd.updateOne({_id: req.params.mcdId}, data)
        res.json(mcd)
    } catch(error){
        res.json({message: error})
    }
})

router.delete('/:mcdId', async(req, res) => {
    try {
        const mcd = await Mcd.deleteOne({_id: req.params.mcdId})
    } catch (error){
        res.json({message: error})
    }
})

module.exports = router