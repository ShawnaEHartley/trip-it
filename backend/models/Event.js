const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    location: {
        name: String,
        country: String,
        state: String,
        city: String,
        streetAddress: String,
        zipCode: String
    },
    startDate: Date,
    endDate: Date,
    cost: Number,
    splitCostStructure: {
        type: Boolean,
        default: false
    },
    organizer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    peopleGoing: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
    }],
    booked: {
        type: Boolean,
        default: false
    },
    tripId: {
        type: Schema.Types.ObjectId,
        ref: 'Trip',
        required: true
    },
    imageUrl: String
});

module.exports = mongoose.model('Event', eventSchema);