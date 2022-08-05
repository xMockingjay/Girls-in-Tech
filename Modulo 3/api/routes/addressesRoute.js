const { Router } = require("express");
const AddressController = require("../controllers/AddressController.js");

const router = Router();

module.exports = router
    .get('/addresses', AddressController.listAddresses)
    .get('/addresses/:id', AddressController.addressById)
    .post('/addresses', AddressController.createAddress)
    .put('/addresses/:id', AddressController.updateAddress)
    .delete('/addresses/:id', AddressController.deleteAddress)