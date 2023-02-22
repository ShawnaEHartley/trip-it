const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Event = mongoose.model('Event');

/* GET event */
// get ALL events
router.get('/', async function (req, res, next) {
    try {
        const events = await Event.find();
        return res.json(events);
    }
    catch(err) {
        return "There are no events dummy";
    }
});

// get event by Id

router.get('/:eventId', async function (req, res, next) {
    try {
        const event = await Event.findById(req.params.eventId);
        return res.json(event);
    }
    catch(err) {
        const error = new Error('Event not found');
        error.statusCode = 404;
        error.errors = { message: 'No event found with that id'};
        return next(error);
    }
});

// get events by trip

router.get('/trips/:tripId', async function (req, res, next) {
    try {
        const trips = await Event.find()
    }
})

/* POST requests below */
// create an event
router.post('/', async function (req, res, next) {
    try {
        const newEvent = new Event({
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            date: req.body.date,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            cost: req.body.cost,
            splitCostStructure: req.body.splitCostStructure,
            peopleGoing: req.body.peopleGoing,
            booked: req.body.booked
        })

        let event = newEvent.save();
        return res.json(event);
    }
    catch(err) {
        next(err);
    }
});