const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

/* GET trips */
// get all trips by user
router.get('/user/:userId', async function (req, res, next) {
    let user;
    const userId = req.params.userId;
    try {
        const trips = await Trip.find({ $or: [{organizer: userId}, { members: userId }]})
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
                                .populate("members", "_id name");
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
        })

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
        const trip = Trip.findById(ObjectId(req.params.tripId));
        return res.json(trip);
    }
    catch(err) {
        next(err);
    }
});

    }
})

module.exports = router;