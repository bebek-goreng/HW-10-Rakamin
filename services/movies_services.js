import Movies from "../repositories/movies_repositories.js";

class Movies_Services {
    static async getAll(page) {
        const data = await Movies.get(page);

        return data;
    }

    static async getById(id) {
        const data = await Movies.getId(id);

        if (!data) throw { name: 'Data Not Found' }

        return data;
    }

    static async getMovies(title) {
        const { moviesTitle } = title;

        if (!moviesTitle) throw { name: 'Invalid Input' }

        const data = await Movies.getTitle(title);

        if (!data) throw { name: 'Data Not Found' }

        return data;
    }

    static async post(fileName, fileMimeType, moviesData) {
        const { title, genres, year, photo } = moviesData;
        const file = fileName;
        const mimetype = fileMimeType

        if (!title || !genres || !year) {
            throw { name: 'Invalid Input' };
        }

        if (!file) throw { name: 'Invalid File' }

        const allowedExtensions = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

        if (!allowedExtensions.includes(mimetype)) throw { name: 'Invalid Extension' }

        const imageUrl = `http://localhost:3000/api/images/${file}`;

        const existingMovies = await Movies.getTitle(title);

        if (existingMovies) {
            throw { name: 'Movies' };
        }

        const newMovies = {
            title: title,
            genres: genres,
            year: year,
            photo: imageUrl
        }

        const create = await Movies.create(newMovies);

        return create;
    }

    static async update(id, fileName, fileMimeType, moviesData) {
        const { title, genres, year, photo } = moviesData;
        const file = fileName;
        const mimetype = fileMimeType

        if (!title || !genres || !year) {
            throw { name: 'Invalid Input' };
        }

        if (!file) throw { name: 'Invalid File' }

        const allowedExtensions = ["image/png", "image/jpeg", "image/jpg", "image/webp"];

        if (!allowedExtensions.includes(mimetype)) throw { name: 'Invalid Extension' }

        const imageUrl = `http://localhost:3000/api/images/${file}`;

        const existingMovies = await Movies.getTitle(title);

        if (existingMovies) {
            throw { name: 'Movies' };
        }

        const newMovies = {
            title: title,
            genres: genres,
            year: year,
            photo: imageUrl
        }

        const updateMovies = await Movies.edit(id, newMovies);

        return updateMovies;
    }

    static async delete(id) {
        if (!id) throw { name: 'Data Not Found' }

        const data = await Movies.drop(id);

        return data;
    }
}

export default Movies_Services;