import express from 'express';
import { BookController } from './controller/BookController';

const app = express();

const PORT = 3000;

app.use(express.json());

const bookController = new BookController();

app.post('/books', bookController.createBook);

app.listen(PORT, ()=> console.log("API online na porta: " + PORT));