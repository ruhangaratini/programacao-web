import { Request, Response } from "express";
import { Book } from "../model/BookModel";
import { insertBookService } from "../service/Books/InsertBookService";
import { ErrorResponse } from "../model/ErrorResponse";

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

    public listBooks(req: Request, res: Response) {

    }

    public getBookByID(req: Request, res: Response) {

    }

    public updateBook(req: Request, res: Response) {

    }

    public deleteBook(req: Request, res: Response) {

    }

}