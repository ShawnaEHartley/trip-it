const mongoose = require("mongoose");
const { mongoURI: db } = require('../config/keys.js');
const User = require('../models/User');
const bcrypt = require('bcryptjs');


console.log("I am in seeds")

const users = [];
users.push(
  new User ({
    email: 'shawna@email.com', 
    name: 'Shawna',
    hashedPassword: bcrypt.hashSync('password', 10)
  })
)

console.log(users)

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


mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
    insertSeeds();
  })
  .catch(err => {
    console.log("yikes");
    console.error(err.stack);
    process.exit(1);
  });

const insertSeeds = () => {
  console.log("Resetting db and seeding users and tweets...");
  User.collection.drop()
                .then(() => User.insertMany(users))
                .then(() => {
                  console.log("Done!");
                  mongoose.disconnect();
                })
                .catch(err => {
                  console.error(err.stack);
                  process.exit(1);
                });
};