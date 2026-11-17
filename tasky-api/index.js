import dotenv from 'dotenv';
import express from 'express';
import tasksRouter from './api/tasks';
import './db';
import cors from 'cors';

dotenv.config();

const errHandler = (err, req, res, next) => {
    // Hide error details in production
    if (process.env.NODE_ENV === 'production') {
        return res.status(500).send('Something went wrong!');
    }

    res.status(500).send(
        `Hey! You caught the error. Here's the details: ${err.stack}`
    );
};

const app = express();
//enable COR for all requests
app.use(cors());

const port = process.env.PORT;

app.use(express.static('public'));

app.use(express.json());

app.use('/api/tasks', tasksRouter);

// Error handler must be after the routes
app.use(errHandler);

app.listen(port, () => {
    console.info(`Server running at ${port}`);
});