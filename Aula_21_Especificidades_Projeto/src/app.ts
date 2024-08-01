import { cadastrarTipoConta, updateTipoConta, deletaTipoConta, getTipoConta, getTiposConta } from "./controller/TipoContaController";
import { cadastrarConta, updateConta, deletaConta, getConta, getContas } from "./controller/ContaController";
import { cadastrarCliente, updateCliente, deletaCliente, getCliente, getClientes } from "./controller/ClienteController";

import express from "express"

const app = express();
const PORT = 3040;

app.use(express.json());

app.post("/api/conta", cadastrarConta);
app.put("/api/conta", updateConta);
app.delete("/api/conta",deletaConta);
app.get("/api/conta",getConta);
app.get("/api/conta/all",getContas);

app.post("/api/tipoConta", cadastrarTipoConta);
app.put("/api/tipoConta", updateTipoConta);
app.delete("/api/tipoConta",deletaTipoConta);
app.get("/api/tipoConta",getTipoConta);
app.get("/api/tipoConta/all",getTiposConta);

app.post("/api/cliente", cadastrarCliente);
app.put("/api/cliente", updateCliente);
app.delete("/api/cliente", deletaCliente);
app.get("/api/cliente", getCliente);
app.get("/api/cliente/all", getClientes);


app.listen(PORT, ()=>{console.log("API rodando na PORTA 3040")})