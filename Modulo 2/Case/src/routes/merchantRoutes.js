import express from "express";
import MerchantController from "../controllers/merchantController.js";

const router = express.Router();
/**
 * Evite o uso de underline para rotas.
 * Por convensão a comunidade geralmente usa quebec-case e outros usam camelCase. Sugiro o uso de quebec-case.
 * Mas abaixo estou adicionando uma melhor nomeclatura para as rotas que pode ser vista em: https://github.com/WhiteHouse/api-standards#pragmatic-rest
 */
router 
    .get('/merchant', MerchantController.readMerchants)
    .get('/merchant/:id', MerchantController.readMerchantById)

    .post('/merchant', MerchantController.createMerchant)

    .put('/merchant/:id', MerchantController.updateMerchant)
    .put('/merchant/message/:id', MerchantController.sendMessage)
    .put('/merchant/status/:id', MerchantController.controllStatus)
    .put('/merchant/categorie/:id', MerchantController.controllCategorie)

    .delete('/merchant/:id', MerchantController.deleteMerchant)

export default router;