import express from "express";
import { ModalidadePaesController } from "./controller/ModalidadePaesController";
import { EstoqueController } from "./controller/EstoqueController";

const app = express();
const PORT = process.env.PORT ?? 3000;
app.use(express.json());

function logInfo(){
    console.log(`API em execução no URL: http:localhost:${PORT}`);
}

const modalidadePaesController = new ModalidadePaesController();
const estoqueController = new EstoqueController();

app.get('/api/modalidade/todas', modalidadePaesController.listar);
app.get('/api/modalidade/:id', modalidadePaesController.buscar);
app.post('/api/modalidade', modalidadePaesController.inserir);
app.put('/api/modalidade', modalidadePaesController.atualizar);
app.delete('/api/modalidade', modalidadePaesController.deletar);

app.get('/api/estoque/todos', estoqueController.listar);
app.get('.api/estoque/:id', estoqueController.buscar);
app.post('/api/estoque', estoqueController.inserir);


app.listen(PORT, logInfo);
