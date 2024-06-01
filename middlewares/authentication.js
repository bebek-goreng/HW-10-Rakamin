import User_Repositories from '../repositories/user_repositories.js'
import { verifyToken } from '../lib/jwt.js'


const authentication = async (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) return res.status(400).json({
            message: 'Authentication Token Required'
        });

        const accessToken = token.split(' ')[1];

        if (!accessToken) return res.status(401).json({
            message: 'Invalid Token'
        });

        const decoded = verifyToken(accessToken);

        const data = await User_Repositories.getById(decoded.id)

        if (!data) throw {name: 'Data Not Found'}

        req.data = data;
        req.token_id = decoded.id;
        
        next();

    } catch (error) {
        next(error);
    }
}

export {
    authentication,
}