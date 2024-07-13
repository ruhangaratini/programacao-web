import { ErrorResponse } from "../../model/ErrorResponse";
import { BookRepository } from "../../repository/BookRepository";

export async function listBooks(): Promise<any[] | ErrorResponse> {
    const repository = new BookRepository();

    const books = await repository.listBooks()

    if(books instanceof Error) {
        return new ErrorResponse(500, { message: 'Ocorreu um erro ao listar livros' });
    }

    return books;
}