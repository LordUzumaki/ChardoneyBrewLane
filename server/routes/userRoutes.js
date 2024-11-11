import { Router } from 'express';
import { login, signup } from '../controllers/userController.js';

const router = Router();

router.post('/login', login);  // POST for login
router.post('/signup', signup);  // POST for signup

export default router;
