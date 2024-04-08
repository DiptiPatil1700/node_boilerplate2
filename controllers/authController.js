// const authService = require('../services/authService');


// const register = async (req, res, next) => {
//   try {
//     const { name, email, password, phone, gender, dateOfBirth  } = req.body;
//     const user = await authService.register(name, email, password, phone, gender, dateOfBirth );
//     res.status(201).json({ user });
//   } catch (err) {
//     next(err);
//   }
// };

// const login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     const token = await authService.login(email, password);
//     res.status(200).json({ token });
//   } catch (err) {
//     next(err);
//   }
// };


// const getAuthUsers = async (req, res, next) => {
//   try {
//       const users = await authService.getAuthUsers();
//       res.json(users);
//   } catch (err) {
//       next(err);
//   }
// };

// // get user by id
// const getAuthUserById = async (req, res, next) => {
//   try {
//       const user = await authService.getAuthUserById(req.params.id);
//       res.json(user);
//   } catch (err) {
//       next(err);
//   }
// };


// // delete user by id
// const deleteAuthUser = async (req, res, next) => {
//   try {
//       const user = await authService.deleteAuthUser(req.params.id);
//       res.json(user);
//   } catch (err) {
//       next(err);
//   }
// };

// const updateAuthUser = async (req, res, next) => {
//   try {
//     const updatedUser = await authService.updateAuthUser(req.params.id, req.body);
//     res.json(updatedUser);
//   } catch (err) {
//     next(err);
//   }
// };

// const patchAuthUser = async (req, res, next) => {
//   try {
//     const patchedUser = await authService.patchAuthUser(req.params.id, req.body);
//     res.json(patchedUser);
//   } catch (err) {
//     next(err);
//   }
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
