const categoryModel = require('../models/category');

module.exports = app => {
  app.get('/listCategory', (requ, res) => {
    categoryModel.listAll(res);
  });

  app.post('/addCategory', (req, res) => {
    const category = req.body;
    categoryModel.save(category, res);
  });

  app.delete('/deleteCategory/:id', (req, res) => {
    const params = req.params;
    categoryModel.delete(params, res);
  });
}