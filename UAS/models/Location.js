// (4) Buat Schema Location
const mongoose = require('mongoose')

const LocationSchema = mongoose.Schema({
    // Buat Schema data
    lokasi: {
        type: String,
        required: true
    },
    kota: {
        type: String,
        required: true
    },
    drivethru: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Location', LocationSchema)