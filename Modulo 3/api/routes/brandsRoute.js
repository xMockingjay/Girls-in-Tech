const { Router } = require("express");
const BrandController = require("../controllers/BrandController.js");

const router = Router();

module.exports = router
    .get('/brands', BrandController.listBrands)
    .get('/brands/:id', BrandController.brandById)
    .post('/brands', BrandController.createBrand)
    .put('/brands/:id', BrandController.updateBrand)
    .delete('/brands/:id', BrandController.deleteBrand)