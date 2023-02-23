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
            // .populate('peopleGoing', '_id name');
        return res.json(events);
    }
    catch(err) {
        const error = new Error('No events found');
        error.statusCode = 418;
        error.errors = { message: 'No events found'};
        return next(error);
    }
});

// get event by Id
router.get('/:eventId', async function (req, res, next) {
    try {
        const event = await Event.findById(req.params.eventId)
            .populate('peopleGoing', '_id name');
        return res.json(event);
    }
    catch(err) {
        const error = new Error('Event not found');
        error.statusCode = 404;
        error.errors = { message: 'No event found'};
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
        error.errors = { message: 'No user found'};
        return next(error);
    }
    try {
        const trips = await Event.find({ tripId: trip._id })
            .populate('peopleGoing', '_id name')
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
// add people to event
router.patch('/addMember/:eventId', async function (req, res, next) {
    try {
        await Event.updateOne({ _id: ObjectId(req.params.eventId)},{ $push: { peopleGoing: req.body._id }})
        const event = await Event.findById(req.params.eventId)
            .populate('peopleGoing', '_id name');
        return res.json(event);
    }
    catch(err) {
        next(err)
    }
});

// remove person from event
router.patch('/remove/:eventId/:userId', async function (req, res, next) {
    try {
        await Event.updateOne(
            { _id: req.params.eventId},
            { $pull: { peopleGoing: req.params.userId }}
        );
        
        const event = await Event.findById(req.params.eventId)
            .populate('peopleGoing', '_id name');
        return res.json(event);
    }
    catch(err) {
        next(err);
    }
});

// update an event
router.patch('/:eventId', async function (req, res, next) {
    try {
        const updates = req.body;
        await Event.updateOne({_id: req.params.eventId}, {$set: updates});
        const event = await Event.findById(req.params.eventId)
            .populate('peopleGoing', '_id name');
        return res.json(event);
    }
    catch(err) {
        next(err);
    }
});

/* DELETE events */

router.delete('/:eventId', async function (req, res, next) {
    try {
        await Event.deleteOne({ _id: req.params.eventId });
    } catch(err) {
        next(err);
    }
});

module.exports = router;