import express from 'express';
import Movies_Controller from '../controller/movies.controllers.js';
import { multerMiddleware } from '../middlewares/multer.js';
import { adminAuthorization } from '../middlewares/authorization.js';

const movies_routes = express.Router();

movies_routes.get('/movies/title', Movies_Controller.getMoviesByTitle);
movies_routes.get('/movies?', Movies_Controller.getAllMovies);
movies_routes.get('/movies/:id', Movies_Controller.getMoviesById); 

movies_routes.post('/movies/post', adminAuthorization, multerMiddleware, Movies_Controller.createMovies);
movies_routes.put('/movies/update/:id', adminAuthorization, multerMiddleware, Movies_Controller.updateMovies);
movies_routes.delete('/movies/delete/:id', adminAuthorization, Movies_Controller.deleteMovies);

export {
    movies_routes
}