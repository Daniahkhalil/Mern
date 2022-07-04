const express = require('express');
const cors = require('cors') // This is new
const app = express();
app.use(cors()) // This is new
const port = 8000;
require('./server/routes/team.routes')(app); // This is new
app.listen(8000, () => console.log(`Listening on port: 8000`) );
