import express from 'express';
import { user_routes } from './user_routes.js';
import { movies_routes } from './movies_routes.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.use("/api/images", express.static(path.join(__dirname, "../uploads")))
router.use('/api', user_routes);
router.use('/api', movies_routes);

export {
    router,
}