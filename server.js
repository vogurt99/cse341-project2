const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./data/database');
const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use('/', require('./routes/index'));

// Routes
app.use('/products', require('./routes/products'));
app.use('/categories', require('./routes/categories'));

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Database connected and server running on port ${port}`);
    });
});