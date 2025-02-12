import express from 'express';
import {
    getUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser,
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.route('/').get(getUsers).post(postUser);
userRouter.route('/:id').get(getUserById).patch(patchUser).delete(deleteUser);

export default userRouter;
