export class Cliente {
    id: number;
    nome: string;
    cpf: string;
    data_nascimento?: Date;

    constructor(id?: number, nome?: string, cpf?: string, data_nascimento?: Date) {
        this.id = id || 0;
        this.nome = nome || '';
        this.cpf = cpf || '';
        this.data_nascimento = data_nascimento;
    }
}