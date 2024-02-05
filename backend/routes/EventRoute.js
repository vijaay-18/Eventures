const express = require('express');
const {postEvents,getEvents,updateEvents,deleteEvent}=require('../controllers/EventController.js');
const router = express.Router();


router.post('/',postEvents);
router.get('/:id',getEvents);
router.put('/:id',updateEvents);
router.delete('/:id',deleteEvent);

module.exports = router;