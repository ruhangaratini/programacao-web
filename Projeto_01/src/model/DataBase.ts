import { EstoqueRepository } from "../repository/EstoqueRepository";
import { ModalidadePaesRepository } from "../repository/ModalidadePaesRepository";
import { VendaRepository } from "../repository/VendaRepository";

class DataBase {
    modalidadePaes:ModalidadePaesRepository = new ModalidadePaesRepository();
    estoquePaes:EstoqueRepository = new EstoqueRepository();
    vendaPaes:VendaRepository = new VendaRepository();
}

export default new DataBase();