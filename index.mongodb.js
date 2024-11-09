// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('contact')
// db.contactlist.drop()
// Create a new document in the collection.
db.getCollection('contactlist').insertMany([
  { lastName: 'Ben', firstName: 'Moris', email: 'ben@gmail.com', age: 26 },
  { lastName: 'Kefi', firstName: 'Seif', email: 'kefi@gmail.com', age: 15 },
  {
    lastName: 'Emilie',
    firstName: 'Seif',
    email: 'emilie.b@gmail.com',
    age: 40,
  },
  {
    lastName: 'Alex',
    firstName: 'brown',
    age: 4,
  },
  {
    lastName: 'Denzel',
    firstName: 'Washington',
    age: 3,
  },
])

// 01.
// Display all of the contacts list.
db.contactlist.find({})

// 02.
// Display all the information about only one person using his ID.
db.contactlist.find({ _id: ObjectId('672f8d2648b90fc1abfbfb17') })

// 03.
// Display all the contacts with an age >18.
db.contactlist.find({ age: { $gt: 18 } })

// 04.
// Display all the contacts with an age>18 and name containing "ah".
db.contactlist.find({
  age: { $gt: 18 },
  $or: [
    { lastName: /ah/i }, // Case-insensitive search for 'ah'
    { firstName: /ah/i }, // Case-insensitive search for 'ah'
  ],
})

// 05.
// Change the contact's first name from"Kefi Seif" to "Kefi Anis".
db.contactlist.updateOne(
  { _id: ObjectId('672f8d2648b90fc1abfbfb14') },
  { $set: { firstName: 'Anis' } }
)

// 06.
// Delete the contacts that are aged under <5.
db.contactlist.deleteMany({ age: { $lt: 5 } })

// 07.
// Display all of the contacts list.
db.contactlist.find()
// NB: You have to save your work as screensho
