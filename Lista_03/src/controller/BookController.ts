import { Request, Response } from "express";
import { Book } from "../model/BookModel";
import { insertBookService } from "../service/Books/InsertBookService";
import { ErrorResponse } from "../model/ErrorResponse";
import { listBooks } from "../service/Books/ListBooksService";
import { getBookByID } from "../service/Books/getBookByIdService";
import { updateBookByID } from "../service/Books/updateBookService";
import { deleteBookByID } from "../service/Books/deleteBookByIdService";

export class BookController {

    public async createBook(req: Request, res: Response) {
        const book: Book | Error = Book.fromJson(req.body);

        if (book instanceof Error) {
            res.status(400).json({ message: book.message });
            return;
        }

        const insertID: number | ErrorResponse = await insertBookService(book);

        if(insertID instanceof ErrorResponse) {
            res.status(insertID.code).json(insertID.message);
            return;
        }

        res.status(201).json({ id: insertID, book: book });
    }

    public async listBooks(req: Request, res: Response) {
        const books: any[] | ErrorResponse = await listBooks();

        if(books instanceof ErrorResponse) {
            res.status(books.code).json(books.message);
            return;
        }

        res.status(200).json(books);
    }

    public async getBookByID(req: Request, res: Response) {
        const id = parseInt(req.params.id, 10);

        if(Number.isNaN(id)) {
            res.status(400).json({ message: 'ID inválido' });
            return;
        }

        const book = await getBookByID(id);

        if(book instanceof ErrorResponse) {
            res.status(book.code).json(book.message);
            return;
        }

        res.status(200).json(book);
    }

    public async updateBook(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        if(Number.isNaN(id)) {
            res.status(400).json({ message: 'ID inválido' });
            return;
        }

        const book = Book.fromJson(req.body);
        if (book instanceof Error) {
            res.status(400).json({ message: book.message });
            return;
        }

        book.id = id;

        const response = await updateBookByID(book);

        if(response instanceof ErrorResponse) {
            res.status(response.code).json(response.message);
            return;
        }

        if(response) {
            res.status(201).json(book);
        } else {
            res.status(404).json({ message: 'Livro não encontrado' });
        }
    }

    public async deleteBook(req: Request, res: Response) {
        const id = parseInt(req.params.id);
        if(Number.isNaN(id)) {
            res.status(400).json({ message: 'ID inválido' });
            return;
        }

        const response = await deleteBookByID(id);

        if(response instanceof ErrorResponse) {
            res.status(response.code).json(response.message);
            return;
        }

        if(response) {
            res.status(202).json({ message: 'Book deleted successfully' });
        } else {
            res.status(404).json({ message: 'Livro não encontrado' });
        }
    }

}