import Movies_Services from "../services/movies_services.js";
import { multerMiddleware } from '../middlewares/multer.js'

class Movies_Controller {
    static async getAllMovies(req, res, next) {
        try {
            const page = req.query.page;
            const data = await Movies_Services.getAll(page);

            res.status(200).json({
                message: 'Get Movies Success',
                data
            });

        } catch (error) {
            next(error);
        }
    }

    static async getMoviesById(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const data = await Movies_Services.getById(id);

            res.status(200).json({
                message: 'Get Data By Id Success',
                data
            });
        } catch (error) {
            next(error);
        }
    }

    static async getMoviesByTitle(req, res, next) {
        try {
            const title = req.body;

            const data = await Movies_Services.getMovies(title);

            res.status(200).json({
                message: 'Get Data By Title Success',
                data
            })
        } catch (error) {
            next(error);
        }
    }

    static async createMovies(req, res, next) {
        try {
            const data = req.body;
            const fileName = req.file.filename;
            const fileMimeType = req.file.mimetype;

            const moviesData = await Movies_Services.post(fileName, fileMimeType, data);

            res.status(200).json({
                message: 'Create Movies Success',
                moviesData
            });
        } catch (error) {
            next(error);
        }
    }


    static async updateMovies(req, res, next) {
        try {
            const id = parseInt(req.params.id);
            const data = req.body;
            const fileName = req.file.filename;
            const fileMimeType = req.file.mimetype;

            const editMovies = await Movies_Services.update(id, fileName, fileMimeType, data)

            res.status(200).json({
                message: 'Update User Success',
                editMovies
            });
        } catch (error) {
            next(error);
        }
    }

    static async deleteMovies(req, res, next) {
        try {
            const id = parseInt(req.params.id);

            const dropMovies = await Movies_Services.delete(id);

            res.status(200).json({
                message: 'Delete Movies Success'
            });

        } catch (error) {
            next(error)
        }
    }
}

export default Movies_Controller;