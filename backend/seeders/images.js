const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');
const User = require('../models/User');
const Trip = require('../models/Trip');
const Event = require('../models/Event');

let awsUrls = ['https://tripit-seeds.s3.amazonaws.com/stamps/stamp_1.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_2.png',
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_3.png',
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
'https://tripit-seeds.s3.amazonaws.com/stamps/stamp_45.png']

let rand = Math.floor(Math.random() * awsUrls.length);

const DEFAULT_PROFILE_IMAGE_URL = 'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/blank-profile-picture-ga0a514922_1280.png'; 
const DEFAULT_TRIP_MAIN_IMAGE = 'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/event_image.jpeg';
const ROTATING_TRIP_STAMP_IMAGE = rand;
const DEFAULT_EVENT_IMAGE = 'https://sh-aws-tripit-mern.s3.amazonaws.com/tripit-public/tourism.jpeg';


// Connect to database
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    initializeImages();
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });

// Initialize image fields in db
const initializeImages = async () => {
  console.log("Initializing profile avatars...");
  await User.updateMany({}, { profileImageUrl: DEFAULT_PROFILE_IMAGE_URL });
    
  console.log("Initializing Trip main image...");
  await Trip.updateMany({}, { mainImageUrl: DEFAULT_TRIP_MAIN_IMAGE });

  console.log("Initializing Trip stamp...");
  await Trip.updateMany({}, { stampImageUrl: ROTATING_TRIP_STAMP_IMAGE });

  console.log("Initializing Event image...");
  await Event.updateMany({}, { imageUrl: DEFAULT_EVENT_IMAGE });

  console.log("Done!");
  mongoose.disconnect();
}