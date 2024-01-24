// This(server.js) is the entry point NOT app.js.
// Do "start": "nodemon server.js" in package.json. And start script by "npm start".
// app.js will only contain code regarding the express.

const app = require('./app');
const PORT = 3000;

app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
