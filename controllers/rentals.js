const express = require("express");
const router = express.Router();
const RentalModel = require("../models/rental.js");

// CRUD functions needed:
// index and show
// users cannot create, edit, or delete yet

// query: 
// i have not included the verifyToken but that can be added

// show route 
router.get('/:rentalId', async (req, res) => {
    try {
      const rental = await RentalModel.findById(req.params.rentalId);
      console.log(rental);
      res.status(200).json(rental);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: err.message });
    }
})

// index route
router.get('/', async (req, res) => {
    try {
        const rentals = await RentalModel.find({});
        console.log(rentals)
        res.status(200).json(rentals)
    } catch (err) {
        console.log(err)
        res.status(500).json({err: err.message})
    }
});

router.post('/', async function (req, res) {
  console.log(req.body, ' body of the request')
  try {
      const createdRental = await RentalModel.create(req.body)
      res.status(201).json(createdRental)

  } catch(err) {
      console.log(err)
      res.status(500).json({err: err.message})
  }
  
})




module.exports = router;
