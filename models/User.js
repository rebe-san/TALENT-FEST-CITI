const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname:{
   type: String,
   required:true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  street:{
    type: String,
    required: true
  },
  num_ext:{
    type: Number,
    required: false
  },
  num_int:{
    type: Number,
    required: false
  },
  colonia:{
    type: String,
    required: true
  },
  cp:{
    type: Number,
    required: true
  },
  phone:{
    type: Number,
    required: true
  },
  number_id:{
    type: Number,
    required: true
  },
  curp:{
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('user', UserSchema);
