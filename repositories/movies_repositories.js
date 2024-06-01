import prisma from '../config/db.js';

class Movies {
    static async get(page) {
        const limit = 10;
        const skip = (page - 1) * limit;
        const data = await prisma.users.findMany({
            take: limit,
            skip: skip
        });

        return data;
    }

    static async getId(id) {
        const data = await prisma.movies.findUnique({
            where: {
                id: id,
            }
        });

        return data;
    }

    static async getTitle(title) {
        const data = await prisma.movies.findFirst({
            where: {
                title: title
            }
        });

        console.log(title);

        return data;
    }
 
    static async create(moviesData) {
        const data = await prisma.movies.create({
            data: {
                title: moviesData.title,
                genres: moviesData.genres,
                year: moviesData.year,
                photo: moviesData.photo
            }
        });

        return data;
    }

    static async edit(id, moviesData) {
        const data = await prisma.movies.update({
            where: {
                id: id
            }, data: {
                title: moviesData.title,
                genres: moviesData.genres,
                year: moviesData.year,
                photo: moviesData.photo
            }
        });

        return data;
    }

    static async drop(id) {
        const data = await prisma.movies.delete({
            where: {
                id: id,
            }
        });
    }
}

export default Movies;