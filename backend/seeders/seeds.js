const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');
const User = require('../models/User');
const Trip = require('../models/Trip');
const bcrypt = require('bcryptjs');


const users = [];

users.push(
  new User ({
    email: 'demo@email.com',
    name: 'Demo User',
    hashedPassword: bcrypt.hashSync('password', 10),
  })
)

users.push(
  new User ({
    email: 'shawna@email.com', 
    name: 'Shawna',
    hashedPassword: bcrypt.hashSync('password', 10)
  })
)

users.push(
  new User ({
    email: 'charles@email.com', 
    name: 'Charles',
    hashedPassword: bcrypt.hashSync('password', 10)
  })
)

users.push(
  new User ({
    email: 'lynsie@email.com', 
    name: 'Lynsie',
    hashedPassword: bcrypt.hashSync('password', 10)
  })
)

users.push(
  new User ({
    email: 'emmett@email.com', 
    name: 'Emmett',
    hashedPassword: bcrypt.hashSync('password', 10)
  })
)

users.push(
  new User ({
    email: 'janira@email.com', 
    name: 'Janira',
    hashedPassword: bcrypt.hashSync('password', 10)
  })
)

const trips =[]

trips.push(
  new Trip ({
    title: 'EurpTrip 2022',
    startDate: '2022-08-01',
    endDate: '2022-08-22',
    description: 'couple weeks in Germany, Denmark, and Sweden',
    location: {
      country: 'Germany'
    },
    organizer: '63f592b50326647fe09d333d',
    members: [{ memberId: '', name: 'Shawna' }, { memberId: '63f592b50326647fe09d333f', name: 'Lynsie' }, { memberId:'63f592b50326647fe09d3341', name:'Janira' }]
  })
)

trips.push(
  new Trip ({
    title: 'Colombia NYE',
    startDate: '2022-12-28',
    endDate: '2023-01-02',
    description: 'New Years Eve in Colombia',
    location: {
      country: 'Colombia'
    },
    organizer: '63f592b50326647fe09d333d',
    members: [{ memberId: '63f592b50326647fe09d333d', name: 'Shawna' }, { memberId: '63f592b50326647fe09d333e', name: 'Charles' }, { memberId: '63f592b50326647fe09d333f', name: 'Lynsie' }, { memberId: '63f592b50326647fe09d3340', name: 'Emmett' }]
  })
)

trips.push(
  new Trip ({
    title: "Megan's Wedding in Mexico",
    startDate: '2023-03-08',
    endDate: '2023-03-19',
    description: "Mexico for Megan's wedding on March 11, and staying for the next week",
    location: {
      country: 'Mexico',
      city: 'Mexico City'
    },
    organizer: '63f592b50326647fe09d333d',
    members: [{ memberId: '63f592b50326647fe09d333d', name: 'Shawna' }, { memberId: '63f592b50326647fe09d333e', name: 'Charles' }, { memberId: '63f592b50326647fe09d333f', name: 'Lynsie' }, { memberId: '63f592b50326647fe09d3340', name: 'Emmett' }]
  })
)

trips.push(
  new Trip ({
    title: "Weekend in the Catskills",
    startDate: '2023-03-31',
    endDate: '2023-04-02',
    description: "Weekend away in the mountains after bootcamp",
    location: {
      country: 'USA',
      state: 'New York'
    },
    organizer: '63f592b50326647fe09d333e',
    members: [{ memberId: '63f592b50326647fe09d333d', name: 'Shawna' }, { memberId: '63f592b50326647fe09d333e', name: 'Charles' }, { memberId: '63f592b50326647fe09d333f', name: 'Lynsie' }, { memberId: '63f592b50326647fe09d3340', name: 'Emmett' }]
  })
)

trips.push(
  new Trip ({
    title: "MDW in Fire Island",
    startDate: '2023-05-26',
    endDate: '2023-05-29',
    description: "Weekend away at the beach",
    location: {
      country: 'USA',
      state: 'New York'
    },
    organizer: '63f4e03c92f77b866e5c2807',
    members: [{ memberId: '63f592b50326647fe09d333d', name: 'Shawna' }, { memberId: '63f592b50326647fe09d333e', name: 'Charles' }, { memberId: '63f592b50326647fe09d333f', name: 'Lynsie' }, { memberId: '63f592b50326647fe09d3340', name: 'Emmett' }]
  })
)

trips.push(
  new Trip ({
    title: "England for Vicky and Mikyle's wedding",
    startDate: '2023-08-18',
    endDate: '2023-08-31',
    description: "England for Vicky and Mikyle's wedding on Aug 28, staying the week before",
    location: {
      country: 'England'
    },
    organizer: '63f592b50326647fe09d333d',
    members: [{ memberId: '63f592b50326647fe09d333d', name: 'Shawna' }, { memberId: '63f592b50326647fe09d333e', name: 'Charles' }, { memberId: '63f592b50326647fe09d333f', name: 'Lynsie' }, { memberId: '63f592b50326647fe09d3340', name: 'Emmett' }]
  })
)


const events = [];

events.push(
  new Event ({
    title: 'AirBnb in Berlin',
    description: '3 bedroom near Alexander Platz, 2 min walk to Klosterstrasse U-Bahn station',
    location: {
      streetAddress: 'Klosterstraße 65',
      city: 'Berlin',
      country: 'Germany'
    },
    startDate: '2022-08-01',
    endDate: '2022-08-08',
    cost: 2400,
    peopleGoing: [{ userId: '', name: 'Shawna' }, { userId: '63f592b50326647fe09d333f', name: 'Lynsie' }, { userId:'63f592b50326647fe09d3341', name:'Janira' }],
    booked: true,
    tripId: '63f67bb5c6ece807bd4188e6'
  })
)

events.push(
  new Event ({
    title: 'Hotel in Hamburg',
    description: '3 person room on the lake near the train staion',
    location: {
      name: 'Fairmont Vier Jahresseiten',
      streetAddress: 'Neuer Jungfernstieg 9 14',
      city: 'Hamburg',
      country: 'Germany'
    },
    startDate: '2022-08-08',
    endDate: '2022-08-10',
    cost: 1000,
    peopleGoing: [{ userId: '', name: 'Shawna' }, { userId: '63f592b50326647fe09d333f', name: 'Lynsie' }, { userId:'63f592b50326647fe09d3341', name:'Janira' }],
    booked: true,
    tripId: '63f67bb5c6ece807bd4188e6'
  })
)

events.push(
  new Event ({
    title: 'Hotel in Copenhagen',
    description: '3 rooms in Skt Petri near Norreport ',
    location: {
      streetAddress: 'Krystalgade 15',
      city: 'Copenhagen',
      country: 'Denmark'
    },
    startDate: '2022-08-10',
    endDate: '2022-08-14',
    cost: 720,
    splitCostStructure: true,
    peopleGoing: [{ userId: '', name: 'Shawna' }, { userId: '63f592b50326647fe09d333f', name: 'Lynsie' }, { userId:'63f592b50326647fe09d3341', name:'Janira' }],
    booked: true,
    tripId: '63f67bb5c6ece807bd4188e6'
  })
)

events.push(
  new Event ({
    title: 'Day Trip to Kloding',
    description: 'Take the train to Kolding, spend the day there, come back for dinner in Copenhagen',
    location: {
      city: 'Kolding',
      country: 'Denmark'
    },
    startDate: '2022-08-12T10:00:00:000',
    endDate: '2022-08-12T18:00:00:000',
    peopleGoing: [{ userId: '', name: 'Shawna' }, { userId: '63f592b50326647fe09d333f', name: 'Lynsie' }],
    booked: true,
    tripId: '63f67bb5c6ece807bd4188e6'
  })
)



mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    // insertSeeds();
    // insertTripSeeds();
    insertEventSeeds();
    console.log('Finished')
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });

const insertSeeds = () => {
  console.log("Resetting users...");
  User.collection.drop()
                .then(() => User.insertMany(users))
                .then(() => {
                  mongoose.disconnect();
                })
                .catch(err => {
                  console.error(err.stack);
                  process.exit(1);
                });
};

const insertTripSeeds = () => {
  console.log("Resetting trips...");
    Trip.collection.drop()
                .then(() => Trip.insertMany(trips))
                .then(() => {
                  mongoose.disconnect();
                })
                .catch(err => {
                  console.error(err.stack);
                  process.exit(1);
                });
};

const insertEventSeeds = () => {
  console.log("Resetting events...");
  Event.collection.drop()
                  .then(() => Event.insertMany(events))
                  .then(() => mongoose.disconnect())
                  .catch(err => {
                    console.error(err.stack);
                    process.exit(1)
                  });
};
