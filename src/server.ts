import express, { response } from "express";
import { request } from "node:http";

const app = express();

/**
 * GET = Buscas
 * PUT = Criação
 * DELETE = Deletar
 * PATCH = Alterar uma dado
 */
app.get("/", (request, Response) => {
    return response.json({
        message: "Olá",
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: "Usuário salvo com sucesso!",
    })
})
app.listen(3333, () => console.log("Server is running on port 3333"));