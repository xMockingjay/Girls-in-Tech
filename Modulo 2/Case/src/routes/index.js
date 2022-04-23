import express from "express";
import merchant from "./merchantRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "API Merchant"})
    })

    app.use(
        express.json(),
        merchant
    )
}

export default routes;