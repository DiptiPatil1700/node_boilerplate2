import { exportRegister as _register } from '../services/tutorial.service.js';
const register = async (req, res, next) => {
    try {
        const { title, description, published } = req.body;
        const tutorial = await _register(title, description, published);
        res.status(201).json({ tutorial });
    } catch (err) {
        next(err);
    }
};

export const exportRegister = register;