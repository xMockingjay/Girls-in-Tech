const bodyParser = require("body-parser");

const addresses = require("./addressesRoute.js");
const brands = require("./brandsRoute.js");
const categories = require("./categoriesRoute.js");
const merchants = require("./merchantsRoute.js");
const openingHours = require("./openingHoursRoute.js");
const services = require("./servicesRoute.js");

module.exports = app => {
    app.use(
        bodyParser.json(),
        addresses,
        brands,
        categories,
        merchants,
        openingHours,
        services
    );
}