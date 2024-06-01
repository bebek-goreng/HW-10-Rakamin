import express from 'express';
import dotenv from 'dotenv';
import { router } from './routes/main_routes.js';
import { errorHandler } from './middlewares/error_handlers.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
});