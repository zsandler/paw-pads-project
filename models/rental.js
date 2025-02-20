const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    text: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    userName: {
        type: String,
        required: true,
    },
  })

const rentalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,
    },
    location: {
        type: String,
        required: true,
    },
    typeOfRental: {
        type: String,
        required: false,
    },
    padOwner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    review: [reviewSchema]
})

const RentalModel = mongoose.model('Rental', rentalSchema);

module.exports = RentalModel;