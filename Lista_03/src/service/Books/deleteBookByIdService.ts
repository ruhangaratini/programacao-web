import { ErrorResponse } from "../../model/ErrorResponse";
import { BookRepository } from "../../repository/BookRepository";

export async function deleteBookByID(id: number): Promise<boolean | ErrorResponse> {
    const repository = new BookRepository();

    const response = await repository.delete(id);

    if(response instanceof Error) {
        return new ErrorResponse(500, { message: 'Ocorreu um erro ao deletar livro' });
    }

    return response;
}