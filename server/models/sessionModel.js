const mongoose = require("mongoose")

const sessionSchema = new mongoose.Schema({
    name: {
        type: String
    },
    code:{
        type: String
    },
    admin_id:{
        type: mongoose.Types.ObjectId,
        ref: 'Guest'
    },

})
module.exports=mongoose.model("Session",sessionSchema);