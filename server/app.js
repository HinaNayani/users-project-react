// const { MongoClient } = require('mongodb');
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const User = require('./models/user');
const uri = "mongodb+srv://HinaNayani:insiyasakina@cluster0.6wlka.mongodb.net/node-demo?retryWrites=true&w=majority";
mongoose.connect(uri).then((result)=>{
  console.log('connected to Mongo');
}).catch((error)=>{
  console.error('error connecting to Mongo', error);
});

app.listen(process.env.PORT || port, () => console.log(`Example app listening on port port!`))
app.use(cors());
app.get('/users', (req, res) => {
    User.find().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send(err.message);
    });
});

//For edit
app.get('/users/:id', (req, res) => {
  User.findById(req.params.id).then((data)=>{
      res.send(data);
  }).catch((err)=>{
      res.send(err.message);
  });
});

app.post('/users:id', (req, res) => {
  User.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  }).then((data)=>{
    res.send(data);
  }).catch((err)=>{
    res.send(err.message);
  })
});

// Read
// User.find({}).then((res)=>{
//   console.log(res, res.length);
// }).catch((err)=>{
//   console.log(err);
// });
// User.findById('61728f69461c53cd3f92147b').then((res)=>{
//   console.log(res, res.length);
// }).catch((err)=>{
//   console.log(err);
// });

// Create
// (async ()=>{
//   console.log(await User.create({
//     name: 'Abdul Qadeer Khansaab',
//     email: 'aq@aqkhanlabs.com',
//     phone: '687456123',
//   }));
// })();
// (async ()=>{
//   const user = new User({
//     name: 'Abdul Qadeer Khansaab',
//     email: 'aq@aqkhanlabs.com',
//     phone: '687456123',
//   });
//   console.log(await user.save());
// })();
// (async ()=>{
//   console.log(await User.create([
//     {
//       name: 'Abdul Qadeer Khan',
//       email: 'aq@aqkhanlabs.com',
//       phone: '687456123',
//       age:100,
//     },
//     {
//       name: 'Abdussalaam',
//       email: 'as@abdussalaam.com',
//       phone: '874456133',
//     },
//   ],
//   ));
// })();

// Update
// User.updateMany({'email': 'as@abdussalaam.com'},
//     {$set: {'email': 'L@h.re'}}).then((res)=>{
//   console.log(res);
//   // User.find().then((res)=>{
//   //   console.log(res);
//   // });
// });

// Delete
// User.findByIdAndDelete('61728f69461c53cd3f92147b').then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });
// User.deleteMany({name: /Abdu.+/, age: {$gte: 18}}).then((res)=>{
//   console.log(res);
// });
