const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./data/database');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.use('/', require('./routes/index'));

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Database connected and server running on port ${port}`);
    });
});