const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// 1. MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the middleware 2.');
  req.requestTime = new Date().toISOString();
  next();
});

app.use((req, res, next) => {
  console.log('Hello from the middleware 1.');
  next();
});

// 2. ROUTES
app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

// 3. STARTING SERVER
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
