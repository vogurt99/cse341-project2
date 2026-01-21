const Category = require('../models/categories');

const getAll = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createCategory = async (req, res) => {
    try {
        const category = new Category({
            categoryName: req.body.categoryName,
            department: req.body.department
        });
        const newCategory = await category.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedCategory = await Category.findByIdAndUpdate(id, req.body, { new: true });
        
        if (!updatedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedCategory = await Category.findByIdAndDelete(id);
        
        if (!deletedCategory) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { getAll, createCategory, updateCategory, deleteCategory };