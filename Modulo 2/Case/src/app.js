import express from "express";
import routes from "./routes/index.js"

const app = express();

//Transforma o que é enviado pelo PUT/POST em JSON
app.use(express.json());

//Importando a rota
routes(app);

export default app;