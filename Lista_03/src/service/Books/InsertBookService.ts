import { Book } from "../../model/BookModel";
import { BookRepository } from "../../repository/BookRepository";

export async function insertBookService(book: Book) : Promise<number|Error> {
    const repository = new BookRepository();
    return await repository.insert(book);
}