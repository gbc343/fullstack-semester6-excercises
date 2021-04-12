const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  address: { type: [{
    building: {type: String },
    street:   {type: String },
    zipcode:  {type: String }
  }]},
  city: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  cuisine: {
    type: String,
    required: true,
    //index: true, //Optional if unique is defined
    trim: true,
    lowercase: true,
    //minlength:10,
    //maxlength: 50,
    //Custom validation
  },
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  restaurant_id:{
    type: Number,
    required: true,
    trim: true,
    lowercase: true
  },
  created: { 
    type: Date,
    default: Date.now
  },
});



const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;
