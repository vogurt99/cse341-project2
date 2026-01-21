const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'Product name is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price cannot be negative']
    },
    stockQuantity: {
        type: Number,
        required: [true, 'Stock quantity is required'],
        min: [0, 'Stock cannot be negative']
    },
    category: {
        type: String,
        required: [true, 'Category is required']
    },
    manufacturer: {
        type: String,
        required: [true, 'Manufacturer is required']
    },
    restockDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Product', productSchema);