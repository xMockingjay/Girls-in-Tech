const { Router } = require("express");
const MerchantController = require("../controllers/MerchantController.js");

const router = Router();

module.exports = router
    .get('/merchants', MerchantController.listMerchants)
    .get('/merchants/:id', MerchantController.merchantById)
    .post('/merchants', MerchantController.createMerchant)
    .put('/merchants/:id', MerchantController.updateMerchant)
    .delete('/merchants/:id', MerchantController.deleteMerchant)