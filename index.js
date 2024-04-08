import express, { json, urlencoded } from "express";
import cors from "cors";
import dotenv from 'dotenv-extended';
dotenv.load();;
// import multer from "multer";
// import path from "path";
import { exportRouter } from './routes/index.js';
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

/* // configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// create a middleware for handling form-data
const upload = multer({ storage });

// handle the form-data in a POST request
app.post('/api/upload', upload.single('file'), (req, res) => {
  console.log(req.file);
  res.json({ message: "File uploaded successfully" });
}); */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Nodejs-Structure application." });
});

app.use('/api', exportRouter);

// set port, listen for requests
const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// sync database
import { exportDB } from "./models/index.js";
/* exportDB.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  }); */

// re-sync database : sync and removed axisting data into table.
/* exportDB.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
}); */