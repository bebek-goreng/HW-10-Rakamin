import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../uploads"));
    },
    filename: (req, file, cb) => {
        const randomFileName = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
        cb(null, randomFileName);
    }
});


const multerMiddleware = multer({ storage: diskStorage }).single("image");

export {
    multerMiddleware
};
