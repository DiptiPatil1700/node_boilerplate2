// const jwt = require('jsonwebtoken');
// const AuthUser = require('../models/User');
// const BadRequestError = require('../error/BadRequestError');
// const UnauthorizedError = require('../error/UnauthorizedError');
// const jwtSecret = "secretKey";

// const register = async (name, email, password, phone, gender, dateOfBirth) => {
//   const existingUser = await AuthUser.findOne({ email });
//   if (existingUser) {
//     throw new BadRequestError('Email already registered');
//   }
//   const newUser = new AuthUser({ name, email, password, phone, gender, dateOfBirth });
//   await newUser.save();
//   return newUser;
// };


// const login = async (email, password) => {
//   const user = await AuthUser.findOne({ email });
//   if (!user) {
//     throw new UnauthorizedError('Invalid email or password');
//   }
//   const isMatch = await user.comparePassword(password);
//   if (!isMatch) {
//     throw new UnauthorizedError('Invalid email or password');
//   }
//   const token = jwt.sign({ userId: user._id }, jwtSecret, {
//     expiresIn: '1h',
//   });
//   return token;
// };


// // get all users
// const getAuthUsers = async () => {
//   const users = await AuthUser.find();
//   return users;
// };



// // get user by id
// const getAuthUserById = async (id) => {
//   const user = await AuthUser.findById(id);
//   if (!user) {
//     throw new Error('User not found');
//   }
//   return user;
// };


// // delete user by id
// const deleteAuthUser = async (id) => {
//   const user = await AuthUser.findByIdAndDelete(id);
//   if (!user) {
//     throw new Error('User not found');
//   }
//   return user;
// };

// const updateAuthUser = async (req, res, next) => {
//   try {
//     const user = await AuthUser.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!user) {
//       throw new Error('User not found');
//     }
//     res.json(user);
//   } catch (err) {
//     next(err);
//   }
// };

// const patchAuthUser = async (req, res, next) => {
//   try {
//   const user = await AuthUser.findById(req.params.id);
//   if (!user) {
//   throw new Error('User not found');
//   }
//   Object.assign(user, req.body);
//   await user.save();
//   res.json(user);
// } catch (err) {
//   next(err);
// }
// };

// module.exports = {
//   login,
//   register,
//   getAuthUsers,
//   getAuthUserById,
//   deleteAuthUser,
//   updateAuthUser,
//   patchAuthUser,
// };