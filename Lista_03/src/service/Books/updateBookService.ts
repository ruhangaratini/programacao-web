import { Book } from "../../model/BookModel";
import { ErrorResponse } from "../../model/ErrorResponse";
import { BookRepository } from "../../repository/BookRepository";

export async function updateBookByID(book: Book): Promise<boolean | ErrorResponse> {
    const repository = new BookRepository();

    const response = await repository.update(book);

    if(response instanceof Error) {
        return new ErrorResponse(500, { message: 'Ocorreu um erro ao atualizar livro' });
    }

    return response;
}