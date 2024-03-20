const mongoose = require('mongoose');

// Making a schema.
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'], // [bool, message to be shown in case of err]
    unique: true, // name must be unique else will give error.
    trim: true, // Removes white space from beginning and end.
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
  },
  //   rating: Number,   this how we write if only data type is to be mentioned.
  ratingsAvergae: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must have a description'],
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have an cover image.'],
  },
  images: [String], // type is an array of string.
  createdAt: {
    type: Date,
    default: Date.now(), // Read about it. Mongo parses all types of time stamps into date.
    select: false, // To hide createdAt from response permanently.
  },
  startDates: [Date],
});

// Making a model from schema.
// 1st argument is name of model which starts with uppercase Letter(convention).
const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
