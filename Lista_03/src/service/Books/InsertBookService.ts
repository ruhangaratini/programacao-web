import { Book } from "../../model/BookModel";
import { ErrorResponse } from "../../model/ErrorResponse";
import { BookRepository } from "../../repository/BookRepository";

export async function insertBookService(book: Book): Promise<number | ErrorResponse> {
    const repository = new BookRepository();

    const bookExists = await repository.getByISBN(book.isbn);

    if (bookExists instanceof Error) {
        return new ErrorResponse(500, { message: bookExists.message });
    }

    if (bookExists.length > 0) {
        return new ErrorResponse(409, { message: `Livro com o ISBN ${book.isbn} já existente: ${bookExists[0].title}` });
    }

    const newBook: number | Error = await repository.insert(book);

    if (newBook instanceof Error) {
        return new ErrorResponse(500, { message: newBook.message });
    }

    return newBook;
}