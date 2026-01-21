const validator = require('validatorjs');

const validatorjs = (body, rules, customMessages, callback) => {
  const validation = new validator(body, rules, customMessages);
  validation.passes(() => callback(null, true));
  validation.fails(() => callback(validation.errors, false));
};

const saveProduct = (req, res, next) => {
  const validationRule = {
    productName: 'required|string',
    description: 'required|string',
    price: 'required|numeric',
    stockQuantity: 'required|integer',
    category: 'required|string',
    manufacturer: 'required|string',
    restockDate: 'required|string'
  };

  validatorjs(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(400).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveCategory = (req, res, next) => {
  const validationRule = {
    categoryName: 'required|string',
    department: 'required|string'
  };

  validatorjs(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(400).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveProduct,
  saveCategory
};