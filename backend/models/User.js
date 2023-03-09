const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    trips: [{
        type: Schema.Types.ObjectId,
        ref: 'Trip'
    }],
    profileImageUrl: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);