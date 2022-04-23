import express from "express";
import MerchantController from "../controllers/merchantController.js";

const router = express.Router();

router 
    .get('/merchant', MerchantController.readMerchants)
    .get('/merchant/:id', MerchantController.readMerchantById)

    .post('/merchant', MerchantController.createMerchant)

    .put('/merchant/:id', MerchantController.updateMerchant)
    .put('/merchant_message/:id', MerchantController.sendMessage)
    .put('/merchant_status/:id', MerchantController.controllStatus)
    .put('/merchant_categorie/:id', MerchantController.controllCategorie)

    .delete('/merchant/:id', MerchantController.deleteMerchant)

export default router;