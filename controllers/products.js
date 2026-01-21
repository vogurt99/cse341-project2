const Product = require('../models/product');

const getAll = async (req, res) => {
    // #swagger.tags = ['Products']
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createProduct = async (req, res) => {
    /* #swagger.tags = ['Products']
       #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add a new product',
            schema: { $ref: '#/definitions/Product' }
       } 
    */
    const product = new Product({
        productName: req.body.productName,
        description: req.body.description,
        price: req.body.price,
        stockQuantity: req.body.stockQuantity,
        category: req.body.category,
        manufacturer: req.body.manufacturer,
        restockDate: req.body.restockDate
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateProduct = async (req, res) => {
    /* #swagger.tags = ['Products']
       #swagger.parameters['body'] = {
            in: 'body',
            description: 'Update product information',
            schema: { $ref: '#/definitions/Product' }
       } 
    */
    try {
        const id = req.params.id;
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteProduct = async (req, res) => {
    // #swagger.tags = ['Products']
    try {
        const id = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAll, createProduct, updateProduct, deleteProduct };