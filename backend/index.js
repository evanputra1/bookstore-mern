import express, { response } from 'express';
import {PORT, mongoDBURL} from './config.js';
import mongoose, { Mongoose } from 'mongoose';
import {Book} from './models/book-model.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origin with Default of cors(*)
// app.use(cors())
// Option 2: Allow costum Origins
app.use(
    cors({
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type'],
    })
);

app.get('/', (request, response) => {
    console.log(request)
    return response.status(200).send('Welcome to MERN Stack Tutorial')
});

app.use('/books', booksRoute);

mongoose
.connect(mongoDBURL)
.then(() => {
    console.log('Connected to Database');
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    });    
})
.catch(() => {
    console.log(error);
})