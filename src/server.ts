import express, { response } from "express";
import "./database"; //não precisar coloar "./database/index.ts", ele já vai direto no indice

import { routes } from "./routes";
const app = express();

app.use(express.json());
app.use(routes);
app.listen(3333, () => console.log("Server is running on port 3333"));