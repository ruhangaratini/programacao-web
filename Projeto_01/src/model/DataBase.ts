import { EstoqueRepository } from "../repository/EstoqueRepository";
import { ModalidadePaesRepository } from "../repository/ModalidadePaesRepository";

class DataBase {
    modalidadePaes:ModalidadePaesRepository = new ModalidadePaesRepository();
    estoquePaes:EstoqueRepository = new EstoqueRepository;
    // vendaPaes:Array<VendaPaes> = [];
}

export default new DataBase();