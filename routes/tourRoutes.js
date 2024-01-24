const express = require('express');
const tourControllers = require('./../controllers/tourControllers');

const router = express.Router();

router
  .route('/')
  .get(tourControllers.getAllTours)
  .post(tourControllers.createTour);

router
  .route('/:id')
  .patch(tourControllers.updateTour)
  .delete(tourControllers.deleteTour);
router.route('/:id/:x?').get(tourControllers.getTour);

module.exports = router;
