import { verifyToken } from "../lib/jwt.js";

const userAuthorization = async (req, res, next) => {
    try {
        const user_id = parseInt(req.params.id)
        const token = req.headers.authorization.split(' ')[1];

        if (!token) throw { name: 'token' }

        const decodedToken = verifyToken(token)

        const { id, role } = decodedToken;

        if (!id || !role) throw { name: 'authorization' }

        req.user = { id, role };

        if (role !== 'admin' && id !== user_id) throw { name: 'No Access' }

        next();
    } catch (error) {
        next(error);
    }
}

const adminAuthorization = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) throw { name: 'token' }

        const decodedToken = verifyToken(token)

        const { role } = decodedToken;

        console.log(role);

        if (!role) throw { name: 'No Access' }

        if (role !== 'admin') throw { name: 'No Access' }

        next();

    } catch (error) {
        next(error);
    }
}

export {
    userAuthorization,
    adminAuthorization,

}