const { Router } = require("express");
const ServiceController = require("../controllers/ServiceController.js");

const router = Router();

module.exports = router
    .get('/services', ServiceController.listServices)
    .get('/services/:id', ServiceController.serviceById)
    .post('/services', ServiceController.createService)
    .put('/services/:id', ServiceController.updateService)
    .delete('/services/:id', ServiceController.deleteService)