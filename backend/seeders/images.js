const mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectId;

const { mongoURI: db } = require('../config/keys.js');
const User = require('../models/User');
const Trip = require('../models/Trip');
const Event = require('../models/Event');

// const User = mongoose.model('User');
// const Trip = mongoose.model('Trip');
// const Event = mongoose.model('Event');

let awsStampUrls = [
'https://tripit-seeds.s3.amazonaws.com/stamps/euro_stamp.jpeg', 
'https://tripit-seeds.s3.amazonaws.com/stamps/colombia_stamp.jpeg', 
'https://tripit-seeds.s3.amazonaws.com/stamps/mexico_stamp.jpeg', 
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_1.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_2.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/london_stamp.jpeg', 
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_3.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/colombia_stamp2_jpeg',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_4.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_5.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_6.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_7.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_8.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_9.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_10.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_11.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_12.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_13.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_14.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_15.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_16.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_17.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_18.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_19.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_20.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_21.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_22.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_23.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_24.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_25.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_26.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_27.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_28.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_29.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_30.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_31.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_32.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_33.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_34.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_35.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_36.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_37.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_38.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_39.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_40.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_41.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_42.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_43.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_44.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_45.png'];



let eventImages = [
  'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/beach.webp',
  'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/event_image.jpeg',
  'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/event_image2.jpeg',
  'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/event_image3.jpeg',
  'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/event.webp',
  'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/event2.webp',
  'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/event3.webp',
  'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/event4.webp',
  'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/event5.webp',
  'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/event6.webp',
  'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/event7.webp',
  'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/tourists.webp',
  'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/vietnam.webp',
  'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/wineanddine.webp'
];

let rand = Math.floor(Math.random() * eventImages.length);


const DEFAULT_PROFILE_IMAGE_URL = 'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/blank-profile-picture-ga0a514922_1280.png'; 
const DEFAULT_TRIP_MAIN_IMAGE = 'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/tourism.jpeg';
// const DEFAULT_EVENT_IMAGE = 'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/event_image.jpeg';


// Connect to database
// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => {
//     console.log('Connected to MongoDB successfully');
    // initializeEventImages();
    // initializeTripImages();
    // initializeUserProfilePics();

    // call update functions here

  // })
  // .catch(err => {
  //   console.error(err.stack);
  //   process.exit(1);
  // });

// Update Event Images to all the same default image
const initializeEventImages = async () => {
  const events = await(Event.find({}));
  for (let i = 0; i < events.length; i++) {
    const event = events[i];
    const res = await event.updateOne(
      { $set: { imageUrl: eventImages[rand] } }
    );
  };
  console.log('Event Images updated')
  mongoose.disconnect();
  console.log('Disconnected from MongoDB')
};

// Update Trip Images to all the same default image
const initializeTripImages = async () => {
  const trips = await(Trip.find({}));
  for (let i = 0; i < trips.length; i++) {
    const trip = trips[i];
    const res = await trip.updateOne(
      { $set: { tripImageUrl: DEFAULT_TRIP_MAIN_IMAGE, stampImageUrl: awsStampUrls[i] } }
    );
  };
  console.log("Trip Images and Stamps updated");
  mongoose.disconnect();
  console.log("Disconnected from MongoDB");
};

// Update Users to default User Profile Pic
const initializeUserProfilePics = async () => {
  const users = await(User.find({}));
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const res = await user.updateOne(
      { $set: { profileImageUrl: DEFAULT_PROFILE_IMAGE_URL } }
    );
  };
  console.log('User Profile Images updated');
  mongoose.disconnect();
  console.log('Disconnected from MongoDB');
}

// call this function 
const updateEventImage = async (id, imageUrl) => {
  await Event.updateOne(
    {_id: ObjectId(id)},
    { $set: { imageUrl }}
  );
};

const updateTripImage = async (id, tripImageUrl, stampImageUrl) => {
  await Trip.updateOne(
    {_id: ObjectId(id)},
    { $set: {tripImageUrl }},
    { $set: {stampImageUrl }}
  );
};
