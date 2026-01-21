const router = require('express').Router();

router.use('/', require('./swagger'));
router.use('/products', require('./products'));
router.use('/categories', require('./categories'));

router.get('/', (req, res) => {
    res.send('Welcome to the Inventory Management API. To view the documentation, visit <a href="/api-docs">API Documentation</a>');
});

module.exports = router;