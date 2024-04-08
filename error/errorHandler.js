
//   module.exports = (err, req, res, next) => {
//     if (err.name === 'ValidationError') {
//       res.status(422).json({ errors: err.errors });
//     } else if (err.name === 'CastError') {
//       res.status(400).json({ message: 'Invalid id' });
//     } else if (err.message === 'User not found') {
//       res.status(404).json({ message: 'User not found' });
//     } else {
//       res.status(500).json({ message: 'Something went wrong' });
//     }
//   };
  
// module.exports = (err, req, res, next) => {
//     console.error(err);
//     res.status(500).json({ message: 'Internal server error' });
//   };
  