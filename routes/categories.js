const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories');
const validation = require('../middleware/validate');
const { isAuthenticated } = require("../middleware/authenticate");

router.get('/', categoriesController.getAll);
router.post('/', isAuthenticated,validation.saveCategory, categoriesController.createCategory);
router.put('/:id', isAuthenticated, validation.saveCategory, categoriesController.updateCategory);
router.delete('/:id', isAuthenticated, categoriesController.deleteCategory);

module.exports = router;