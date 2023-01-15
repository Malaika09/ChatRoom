const mongoose = require("mongoose")
const bodyParser = require("body-parser")
//const cors = require('cors')
mongoose.connect("mongodb+srv://admin:admin@cluster0.kthh8tc.mongodb.net/ChatApp?retryWrites=true&w=majority", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});

const router = require("./routes/guestRoutes")
const express = require("express")
const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(router)

//app.use(cors)

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})
