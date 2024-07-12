export class Book {
    title: string;
    author: string;
    publishedDate: Date;
    isbn: string;
    pages: number;
    language: string;
    publisher: string;

    constructor(title:string, author:string, publishedDate: Date, isbn: string, pages: number, language: string, publisher: string) {
        this.title = title;
        this.author = author;
        this.publishedDate = publishedDate;
        this.isbn = isbn;
        this.pages = pages;
        this.language = language;
        this.publisher = publisher;
    }

    static fromJson(json: any) : Book|Error {
        try {
            return new Book(
                json.title as string,
                json.author as string,
                new Date(json.publishedDate as string),
                json.isbn as string,
                json.pages as number,
                json.language as string,
                json.publisher as string
            );
        } catch (e) {
            return new Error('Livro inválido');
        }
    }
}