import { Router } from 'express';
const router = Router();
import { create, updateUserById, getAllUsers, getUserById, deleteUserById } from '../controllers/users.controllers.js';

router.post('/create', create);
router.put('/:id', updateUserById);
router.get('/get-all-users', getAllUsers);
router.get('/:id', getUserById);
router.delete('/:id', deleteUserById);

export const usersRouter = router;