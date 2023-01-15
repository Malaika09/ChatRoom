const mongoose = require("mongoose")

const guestSchema = new mongoose.Schema({
    name: {
        type: String
    },
    password:{
        type: String
    },
    sessionId: {
        type: mongoose.Types.ObjectId,
        ref: 'Session'
    }
})

module.exports = mongoose.model('Guest', guestSchema)