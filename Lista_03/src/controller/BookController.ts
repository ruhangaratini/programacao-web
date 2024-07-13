import { Request, Response } from "express";
import { Book } from "../model/BookModel";
import { insertBookService } from "../service/Books/InsertBookService";

export class BookController {

    public async createBook(req: Request, res: Response) {
        const book: Book | Error = Book.fromJson(req.body);

        if (book instanceof Error) {
            res.status(400).json({ message: book.message });
            return;
        }

        const insertID: number | Error = await insertBookService(book);

        if(insertID instanceof Error) {
            res.status(500).json({ message: insertID.message });
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