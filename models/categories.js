const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: [true, 'Category name is required']
    },
    department: {
        type: String,
        required: [true, 'Department is required']
    }
});

module.exports = mongoose.model('Category', categorySchema);