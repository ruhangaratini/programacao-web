import express from 'express';
import { BookController } from './controller/BookController';

const app = express();

const PORT = 3000;

app.use(express.json());

const bookController = new BookController();

app.post('/books', bookController.createBook);
app.get('/books', bookController.listBooks);
app.get('/books/:id', bookController.getBookByID);
app.put('/books', bookController.updateBook);
app.delete('/books', bookController.deleteBook);

app.listen(PORT, () => console.log("API online na porta: " + PORT));