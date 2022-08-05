const { Router } = require("express");
const OpeningHoursController = require("../controllers/OpeningHoursController.js");

const router = Router();

module.exports = router
    .get('/openingHours', OpeningHoursController.listOpeningHours)
    .get('/openingHours/:id', OpeningHoursController.openingHoursById)
    .post('/openingHours', OpeningHoursController.createOpeningHours)
    .put('/openingHours/:id', OpeningHoursController.updateOpeningHours)
    .delete('/openingHours/:id', OpeningHoursController.deleteOpeningHours)