const express = require('express');
const tourControllers = require('./../controllers/tourControllers');

const router = express.Router();

// param middleware
// router.param('id', tourControllers.checkID);

router
  .route('/')
  .get(tourControllers.getAllTours)

  // Chaining multiple middleware on single request.
  .post(tourControllers.createTour);

router
  .route('/:id')
  .get(tourControllers.getTour)
  .patch(tourControllers.updateTour)
  .delete(tourControllers.deleteTour);

module.exports = router;
