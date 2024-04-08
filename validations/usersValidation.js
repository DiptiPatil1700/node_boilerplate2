
// const { body, validationResult } = require('express-validator');

// const register = [
//   body('name', 'Name is required').isLength({ min: 2 }).trim().notEmpty().escape().withMessage('Name must be at least 2 characters long'),
//   body('email', 'Email is required').trim().notEmpty().isEmail().normalizeEmail(),
//   body('password', 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol').matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/).isLength({ min: 8 }).trim().notEmpty().escape().withMessage('Password must be at least 8 characters long'),

//   body('phone', 'Phone number is required').notEmpty().trim().isMobilePhone().withMessage('Invalid phone number format'),
//   body('gender', 'Gender is required').notEmpty().isIn(['male', 'female', 'other']).withMessage('Gender must be either male, female, or other'),
//   // body('dateOfBirth', 'dateOfBirth is required and must be a valid date').notEmpty().isISO8601().toDate(),

//   (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     next();
//   },
// ];

// const login = [
//   body('email', 'Email is required').trim().notEmpty().isEmail().normalizeEmail().escape(),
//   body('password', 'Password is required').trim().notEmpty().escape(),
//   (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
//     next();
//   },
// ];

// module.exports = {
//   login,
//   register,
// };