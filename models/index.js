import { DB, USER, PASSWORD, HOST, dialect as _dialect, pool as _pool } from "../db/connectDb.js";

import Sequelize from "sequelize";
const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: _dialect,
    operatorsAliases: 0,

    pool: {
        max: _pool.max,
        min: _pool.min,
        acquire: _pool.acquire,
        idle: _pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// For Tutorial service.
import tutorialModel from './tutorial.model.js';
db.tutorials = tutorialModel(sequelize, Sequelize);

// For Users service.
import usersModel from './users.model.js';
db.users = usersModel(sequelize, Sequelize);

// export db;
export const exportDB = db;