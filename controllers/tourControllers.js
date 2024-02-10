const Tour = require('./../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();

    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: {
        tours, // tours: tours can be written as tours.
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id); // bcoz in routes we have passed id.
    // findById ~ findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        tour, // tour: tour can be written as tour.
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tours: newTour,
      },
    });
  } catch (err) {
    // if any error in try, this will be executed.
    // Eg. Validation err...
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // gives new(updated) data.
      runValidators: true, // runs schema validators again.
    });

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);

    // 204 means no content.
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

/******


const fs = require('fs');
const Tour = require('./../models/tourModel');

// A middleware function.
exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res
      .status(400)
      .json({ status: 'fail', message: 'name or price property not found.' });
  }
  next();
};

// We could have also used this function in functions below.
// Instead we chose do use it in tourRoutes.js bcoz of philosophy of express
// which says we should always work with middleware stack/pipeline as much as possible.
exports.checkID = (req, res, next, val) => {
  // 'val' represents value of parameter.
  console.log(`The ID is ${val}`);
  if (req.params.id * 1 > tours.length) {
    // 'return' is very important here. As it will go to next() and will send headers after we have sent response
    // which is not allowed.
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  console.log(req.url, req.params, req.requestTime);
  res.status(200).json({
    status: 'success',
    length: tours.length,
    data: {
      tours, // tours: tours can be written as tours.
    },
  });
};

exports.getTour = (req, res) => {
  console.log(req.params);

  const id = req.params.id * 1; // Converting string into number.
  const tour = tours.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour, // tour: tour can be written as tour.
    },
  });
};

exports.createTour = (req, res) => {
  // console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tours: newTour,
        },
      });
    }
  );
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updating the tour...>',
    },
  });
};

exports.deleteTour = (req, res) => {
  // 204 means no content.
  res.status(204).json({
    status: 'success',
    data: null,
  });
};
 */
