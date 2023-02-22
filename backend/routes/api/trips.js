const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');
const User = mongoose.model('User');

/* GET trips */
// get ALL trips
router.get('/', async function (req, res, next) {
    try {
        const trips = await Trip.find()
            .populate('members');
        return res.json(trips);
    }
    catch(err) {
        return "There are no trips dummy";
    }
});

// get all trips by user
router.get('/user/:userId', async function (req, res, next) {
    let user;
    const userId = req.params.userId;
    try {
        const trips = await Trip.find({ $or: [{organizer: userId}, { members: userId }]})
            .populate('members')
            .sort({ startDate: 1 });
        return res.json(trips);
    }
    catch (err) {
        return res.json([]);
    }
});

// get trip by ID
router.get('/:tripId', async function (req, res, next) {
    try {
        const trip = await Trip.findById(req.params.tripId)
            .populate('members');
        return res.json(trip);
    }
    catch(err) {
        const error = new Error('Trip not found');
        error.statusCode = 404;
        error.errors = { message: "No trip found with that id"};
        return next(error);
    }
});

/* POST trip requests */

// create a new trip
router.post('/', async function (req, res, next) {
    try {
        const newTrip = new Trip({
            title: req.body.title,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            description: req.body.description,
            location: req.body.location,
            organizer: req.body.organizer,
            members: req.body.members
        });

        let trip = newTrip.save();
        return res.json(trip);
    }
    catch(err) {
        next(err);
    }
});

/* Update trip listing */
// update a trip

router.patch('/:tripId', async function(req, res, next) {
    const updates = req.body;
    try {
        Trip.updateOne({_id: ObjectId(req.params.tripId)}, {$set: updates});
        const trip = Trip.findById(req.params.tripId)
            .populate('members'); // may not need to populate here, req.body likely already includes full member objects
            // check the events patch method after finding this out.!!!!
        return res.json(trip);
    }
    catch(err) {
        next(err);
    }
});

/* delete trip listing */

router.delete('/:tripId', async function (req, res, next) {
        Trip.deleteOne({_id: ObjectId(req.params.tripId)});
});

module.exports = router;