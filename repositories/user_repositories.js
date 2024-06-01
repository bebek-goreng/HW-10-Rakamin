import prisma from '../config/db.js';

class User_Repositories {
    static async getAll(page) {
        const limit = 10;
        const skip = (page - 1) * limit;
        const data = await prisma.users.findMany({
            take: limit,
            skip: skip
        });

        return data;
    }

    static async getById(id) {
        const data = await prisma.users.findUnique({
            where: {
                id: id,
            }
        });

        return data;
    }

    static async getEmail(email) {
        const data = await prisma.users.findFirst({
            where: {
                email: email
            }
        });

        return data;
    }

    static async createUser(userData) {
        const data = await prisma.users.create({
            data: {
                email: userData.email,
                gender: userData.gender,
                password: userData.password,
                role: userData.role
            }
        });

        return data;
    }

    static async editUser(id, userData) {
        const data = await prisma.users.update({
            where: {
                id: id,
            }, data: {
                email: userData.email,
                gender: userData.gender,
                password: userData.password,
                role: userData.role
            }
        });
        
        return data;
    }

    static async deleteUser(id) {
        const data = await prisma.users.delete({
            where: {
                id: id,
            }
        });
    }
}

export default User_Repositories;