// const usersService = require('../services/usersService');
// const { validationResult } = require('express-validator');


// // get all users
// const getAllUsers = async (req, res, next) => {
//     try {
//         const users = await usersService.getAllUsers();
//         res.json(users);
//     } catch (err) {
//         next(err);
//     }
// };

// // get user by id
// const getUserById = async (req, res, next) => {
//     try {
//         const user = await usersService.getUserById(req.params.id);
//         res.json(user);
//     } catch (err) {
//         next(err);
//     }
// };

// // create new user
// const createUser = async (req, res, next) => {
//     try {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             res.status(422).json({ errors: errors.array() });
//             return;
//         }
//         const user = await usersService.createUser(req.body);
//         res.json(user);
//     } catch (err) {
//         next(err);
//     }
// };

// // update user by id
// const updateUserById = async (req, res, next) => {
//     try {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             res.status(422).json({ errors: errors.array() });
//             return;
//         }
//         const user = await usersService.updateUserById(req.params.id, req.body);
//         res.json(user);
//     } catch (err) {
//         next(err);
//     }
// };


// // delete user by id
// const deleteUserById = async (req, res, next) => {
//     try {
//         const user = await usersService.deleteUserById(req.params.id);
//         res.json(user);
//     } catch (err) {
//         next(err);
//     }
// };


// module.exports = {
//     getAllUsers,
//     getUserById,
//     createUser,
//     updateUserById,
//     deleteUserById,
// };


import { create as _create, getAllUsers as _getAllUsers, getUserById as _getUserById, deleteUserById as _deleteUserById, updateUserById as _updateUserById } from '../services/users.service.js';
import { validationResult } from "express-validator";
// Create users
export const create = async (req, res, next) => {
    try {
        const { fullName, phone, email, password, confirmPassword, dateOfBirth, address, gender, role } = req.body;
        const users = await _create(fullName, phone, email, password, confirmPassword, dateOfBirth, address, gender, role);
        res.status(201).json({ users });
    } catch (err) {
        next(err);
    }
};

// Get all users
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await _getAllUsers();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

// Get user by id
export const getUserById = async (req, res, next) => {
    try {
        const user = await _getUserById(req.params.id);
        res.json(user);
    } catch (err) {
        next(err);
    }
};

// Delete user by id
export const deleteUserById = async (req, res, next) => {
    try {
        const user = await _deleteUserById(req.params.id);
        res.json(user);
    } catch (err) {
        next(err);
    }
};

// Update user by id
export const updateUserById = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const user = await _updateUserById(req.params.id, req.body);
        res.json(user);
    } catch (err) {
        next(err);
    }
};