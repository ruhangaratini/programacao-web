import { DbQuery } from "../database/mysql";
import { Book } from "../model/BookModel";

export class BookRepository {
    private async createTable() {
        try {
            await DbQuery(`
                CREATE TABLE IF NOT EXISTS library.books (
                    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
                    title VARCHAR(255),
                    author VARCHAR(255),
                    publishedDate DATE,
                    isbn VARCHAR(30) UNIQUE,
                    pages INT,
                    lang VARCHAR(255),
                    publisher VARCHAR(255),
                    PRIMARY KEY (id)
                );
            `);
        } catch (e) {
            console.error(e);
        }
    }

    constructor() {
        this.createTable();
    }

    public async insert(book: Book): Promise<number | Error> {
        try {
            const response = await DbQuery(
                `INSERT INTO library.books (title, author, publishedDate, isbn, pages, lang, publisher) VALUES (?, ?, ?, ?, ?, ?, ?)`,
                [book.title, book.author, book.publishedDate.toISOString().split('T')[0], book.isbn, book.pages, book.language, book.publisher]
            );

            return response.insertId;
        } catch (e) {
            return new Error('Ocorreu um erro ao cadastrar livro');
        }
    }

    public async getByISBN(isbn: string): Promise<any[] | Error> {
        try {
            const response = await DbQuery(
                `SELECT title FROM library.books WHERE isbn = ?`,
                [isbn]
            );

            return response;
        } catch (e) {
            return new Error('Ocorreu um erro ao buscar livro por ISBN');
        }
    }

    public async listBooks(): Promise<any[] | Error> {
        try {
            const response = await DbQuery(
                `SELECT * FROM library.books`,
            );

            return response;
        } catch (e) {
            return new Error('Ocorreu um erro ao listar livros');
        }
    }

    public async getByID(id: number): Promise<Book | Error | undefined> {
        try {
            const response = await DbQuery(
                `SELECT * FROM library.books WHERE id = ?`, [id],
            );

            if(response.length == 1) {
                return Book.fromJson(response[0]);
            }

            return;
        } catch (e) {
            return new Error('Ocorreu um erro ao buscar livro');
        }
    }

    public async update(book: Book) : Promise<Error|boolean> {
        try {
            const response = await DbQuery(
                `UPDATE library.books SET 
                    title = ?,
                    author = ?,
                    publishedDate = ?,
                    isbn = ?,
                    pages = ?,
                    lang = ?,
                    publisher = ? 
                WHERE id = ?`, [book.title, book.author,book.publishedDate.toISOString().split('T')[0], book.isbn, book.pages, book.language, book.publisher, book.id!]
            );

            return response.affectedRows == 1;
        } catch (e) {
            return new Error('Ocorreu um erro ao atualizar livro');
        }
    }

    public async delete(id:number) : Promise<boolean|Error> {
        try {
            const response = await DbQuery(
                `DELETE FROM library.books WHERE id = ?`, [id]
            );

            return response.affectedRows == 1;
        } catch (e) {
            return new Error('Ocorreu um erro ao deletar livro');
        }
    }

}