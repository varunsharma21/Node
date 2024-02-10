// This(server.js) is the entry point NOT app.js.
// Do "start": "nodemon server.js" in package.json. And start script by "npm start".
// app.js will only contain code regarding the express.

const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  // .connect(process.env.DATABASE_LOCAL, {
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connceted sucessfully!'))
  .catch((err) => console.log('Error hai', err));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening to port ${port}`));
