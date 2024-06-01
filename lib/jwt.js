import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (payload) => {
    return jwt.sign(payload, process.env.SECRET_KEY);
} 

const verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY);
}

export {
    generateToken,
    verifyToken
}