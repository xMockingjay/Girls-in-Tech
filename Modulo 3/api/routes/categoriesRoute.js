const { Router } = require("express");
const CategoryController = require("../controllers/CategoryController.js");

const router = Router();

module.exports = router
    .get('/categories', CategoryController.listCategories)
    .get('/categories/:id', CategoryController.categoryById)
    .post('/categories', CategoryController.createCategory)
    .put('/categories/:id', CategoryController.updateCategory)
    .delete('/categories/:id', CategoryController.deleteCategory)