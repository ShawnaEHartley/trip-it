const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

/* GET trips */
// get all trips
router.get('/user/:userId', async function (req, res, next) {
    let user;
    const userId = req.params.userId;
    try {
        user = await User.findById(req.params.userId);
    } catch(err) {
        const error = new Error('User not found');
        error.statusCode = 404;
        error.errors = { message: 'No user found with that id'};
        return next(error);
    }
    try {
        const trips = await Trip.find({ $or: [{organizer: userId}, { members: userId }]})
                                .sort({ startDate: 1 });
        return res.json(trips);
    }
    catch(err) {
        return res.json([]);
    }
});

// get trip by ID
router.get('/:id', async function (req, res, next) {
    res.json({
        message: 'GET /api/trips/:id'
    })
});

/* POST trip requests */


module.exports = router;