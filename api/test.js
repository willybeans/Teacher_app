const index = require('./models/index');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/teacher-app');

// var meow = new index.Teachers({
//   name: 'meowmers',
//   instrument: 'drums',
//   email: 'meow@meow.mewo',
// });
//
// meow.save();

// index.Teachers.push({
//   name: 'brian badboy',
//   email: 'brian@badboy.com',
//   phone: '33333333'.
//   age: 4
// });

index.Teachers.findByIdAndUpdate(
  {_id: "5b969658284d64bf800dfecf"},
{$push:  { students:
    {
      name: 'brian badboy',
      email: 'brian@badboy.com',
      phone: '33333333',
      age: 4
    }
  }}
);
