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
            .populate('organizer', '_id name')
            .populate('members', '_id email name');
        return res.json(trips);
    }
    catch(err) {
        return "There are no trips dummy";
    }
});

// get all trips by user by email
router.get('/user/email', async function (req, res, next) {
    try {
        const user = await User.findOne({ email: req.body });
        const trips = await Trip.find({ $or: [{ organizer: user._id }, { members: user._id }] })
            .populate('organizer', '_id name')
            .populate('members', '_id email name')
            .sort({ startDate: 1 });
        return res.json(trips);
    } catch (err) {
        next(err);
    }
});

// get all trips by user
router.get('/user/:userId', async function (req, res, next) {
    let user;
    const userId = req.params.userId;
    try {
        const trips = await Trip.find({ $or: [{ organizer: userId }, { members: userId }] })
            .populate('organizer', '_id name')
            .populate('members', '_id email name')
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
            .populate('organizer', '_id name')
            .populate('members', '_id email name');
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
    try {
        const updates = req.body;
        await Trip.updateOne({ _id: req.params.tripId }, {$set: updates});
        const trip = await Trip.findById(req.params.tripId)
            .populate('organizer', '_id name')
            .populate('members', '_id email name'); // may not need to populate here, req.body likely already includes full member objects
            // check the events patch method after finding this out.!!!!
        return res.json(trip);
    }
    catch(err) {
        next(err);
    }
});

// build out adding trip member by email

/* delete trip listing */

router.delete('/:tripId', async function (req, res, next) {
        try {
            await Trip.deleteOne({ _id: req.params.tripId });
        } catch(err) {
            next(err);
        }
});

module.exports = router;