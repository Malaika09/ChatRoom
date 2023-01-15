//const mongoose = require('mongoose');
const sessionModel = require('../models/sessionModel')
const guestModel = require('../models/guestModel')

module.exports.createGuest = async(req,res) =>{
    try{
        const guest = new guestModel({name: req.body.name})
        guest.save()
        res.send("guest created successfully")
    }
    catch(err){
        return res.status(500).json({msg: err.message})
    }
}

module.exports.createSession = async(req,res)=>{
    sessionModel.find({name: req.body.name}, (err,users)=>{   
     
        if(users.length == 0){
            try{
                const session = new sessionModel({name: req.body.name, code: req.body.code, admin_id: req.params.gid})
                session.save()
        
                res.send("session created successfully")
            }
            catch(err){
                return res.status(500).json({msg: err.message})
            }
        }
        else{
            res.json({msg: "Session name is already taken. Try a new one"}) 
        }

        
    }) 
    
    
}

module.exports.getSession = async(req,res) =>{
    try{
        const session = await sessionModel.findById(req.params.sid)
        res.json(session)
    }
    catch(err){
        res.send(err.message)
    }
}


module.exports.getAllSessions = async(req,res) =>{
    try{
        const session = await sessionModel.find()
        res.json(session)
    }
    catch(err){
        res.send(err.message)
    }
}

module.exports.deleteAllSessions = async(req,res) =>{
    try{
        await sessionModel.deleteMany({})
        res.json("All sessions deleted successfully")
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}
