const bodyParser = require("body-parser");

const brands = require("./brandsRoute.js");
const categories = require("./categoriesRoute.js");
const merchants = require("./merchantsRoute.js");

module.exports = app => {
    app.use(
        bodyParser.json(),
        brands,
        categories,
        merchants
    );
}