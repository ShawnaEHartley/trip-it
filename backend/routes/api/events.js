const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Event = mongoose.model('Event');
const Trip = mongoose.model('Trip');

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
    let trip;
    try {
        trip = await Trip.findById(req.params.tripId);
    } catch(err) {
        const error = new Error('Trip not found');
        error.statusCode = 404;
        error.errors = { message: 'No user found with that id'};
        return next(error);
    }
    try {
        const trips = await Event.find({ tripId: trip._id })
            .sort({ startTime: 1 });
        return res.json(trips);
    }
    catch(err) {
        return res.json([]);
    }
});

/* POST requests below */
// create an event
router.post('/', async function (req, res, next) {
    try {
        const newEvent = new Event({
            title: req.body.title,
            description: req.body.description,
            location: req.body.location,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
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

/* PATCH requests below */
// update an event
router.patch('/:eventId', async function (req, res, next) {
    const updates = req.body;
    try {
        Event.updateOne({_id: ObjectId(req.params.eventId)}, {$set: updates});
        const event = Event.findById(req.params.eventId);
        return res.json(event);
    }
    catch(err) {
        next(err);
    }
});

// add people to event
router.patch('/:eventId/add', async function (req, res, next) {
    try {
        // this will be refacrored
        // I need to refactor how we pull everything
        const oldEvent = Event.findById(req.params.eventId);
        const peopleGoing = oldEvent.peopleGoing;
        const { _id, name } = req.body;
        const newPerson = { userId: _id, name: name };
        peopleGoing.push(newPerson);
        Event.updateOne({_id: ObjectId(req.params.eventId)}, {$set: peopleGoing });
        const event = Event.findById(req.params.eventId);
        return res.json(event);
    }
});

// remove person from event
router.patch('/:eventId/remove/:userId', async function (req, res, next) {

});