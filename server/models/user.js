const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  age: Number,
  phone: String,
  city: {type: String, default: 'Karachi'},
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);