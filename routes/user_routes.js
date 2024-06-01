import express from 'express';
import User_Controller from '../controller/user_controllers.js';
import { authentication } from '../middlewares/authentication.js';
import { userAuthorization } from '../middlewares/authorization.js';

const user_routes = express.Router();

user_routes.post('/register', User_Controller.register);
user_routes.post('/login', User_Controller.login);

user_routes.get('/users', authentication, User_Controller.getAllUser);
user_routes.get('/user/:id', authentication, User_Controller.getuserById);
user_routes.put('/edit/user', authentication, User_Controller.updateUser);

user_routes.delete('/delete/:id', authentication, userAuthorization, User_Controller.deleteUser);

export { user_routes };