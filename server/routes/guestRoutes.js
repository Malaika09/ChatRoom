const express = require("express")
var router = express.Router()
const sessionController = require('../controllers/guestController')


router.post('/createguest', sessionController.createGuest)
router.post('/createsession/:gid', sessionController.createSession)
router.get('/getsession/:sid', sessionController.getSession)

router.get('/getallsessions', sessionController.getAllSessions)
router.delete('/deleteallsessions', sessionController.deleteAllSessions)

router.put('/updatesession')


module.exports = router