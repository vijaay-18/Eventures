const Event = require('../models/EventPost.js');
const mongoose = require('mongoose');

const postEvents = async(req,res,next)=>{
    const newEvents = new Event(req.body);
    try {
        await newEvents.save();
        res.status(200).json("Event Created Successfully");
    } catch (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    }

}

const getEvents = async(req,res,next)=>{
    const id = req.params.id;
    try {
        const event = await Event.findById(id);
        res.status(201).json(event);
    } catch (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    }
}

const updateEvents = async (req, res) => {
    const eventId = req.params.id;
    const { userId } = req.body;
  
    try {
      const event = await Event.findById(eventId);
      if (event.userId === userId) {
        await Event.updateOne({ $set: req.body });
        res.status(200).json("Post Updated");
      } else {
        res.status(403).json("Action forbidden");
      }
    } catch (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);    
    }
};
const deleteEvent = async(req,res,next)=>{
    const id = req.params.id;
    const{userId}=req.body;
    try {
        const event = await Event.findById(id);
        if(event.userId === userId ){
            await Event.deleteOne();
            res.status(200).json("Event Deleted Successfullly");
        }
    } catch (error) {
        res.status(500).send("Internal Server Error");
        console.log(error);
    }
}

module.exports={
    postEvents,
    getEvents,
    updateEvents,
    deleteEvent,
}