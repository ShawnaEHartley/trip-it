const users = [];
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