const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    startDate: Date,
    endDate: Date,
    description: String,
    location: {
        country: String,
        state: String,
        city: String,
        streetAdress: String,
        zipCode: String
    },
    organizer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    members: [{
        memberId: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        name: String
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Trip', tripSchema);