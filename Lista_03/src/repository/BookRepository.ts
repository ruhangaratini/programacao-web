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
                    isbn VARCHAR(30),
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

    public async insert(book: Book) : Promise<number|Error> {
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

}