import express from "express";
import { ModalidadePaesController } from "./controller/ModalidadePaesController";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());


function logInfo(){
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}

const modalidadePaesController = new ModalidadePaesController();

app.get('api/modalidade/todas', modalidadePaesController.listar);

app.listen(PORT, logInfo);
