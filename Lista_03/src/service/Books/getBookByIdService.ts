import { Book } from "../../model/BookModel";
import { ErrorResponse } from "../../model/ErrorResponse";
import { BookRepository } from "../../repository/BookRepository";

export async function getBookByID(id:number): Promise<Book | ErrorResponse> {
    const repository = new BookRepository();

    const book = await repository.getByID(id);

    if(book instanceof Error) {
        return new ErrorResponse(500, { message: 'Ocorreu um erro ao listar livros' });
    }

    if(!book) {
        return new ErrorResponse(404, { message: 'Livro não encontrado' });
    }

    return book;
}