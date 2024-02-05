const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    eventName :{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{
    timestamps:true
})
const eventModel = mongoose.model("Event",eventSchema);
module.exports = eventModel;