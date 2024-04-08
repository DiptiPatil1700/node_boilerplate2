
// const userModel = require('../models/userModel');

// // get all users
// const getAllUsers = async () => {
//   const users = await userModel.find();
//   return users;
// };

// // get user by id
// const getUserById = async (id) => {
//   const user = await userModel.findById(id);
//   if (!user) {
//     throw new Error('User not found');
//   }
//   return user;
// };

// // create new user
// const createUser = async (userData) => {
//   const existingUser = await userModel.findOne({ email });
//   if (existingUser) {
//     throw new BadRequestError('Email already registered');
//   }
//   const user = await userModel.create(userData);
//   return user;
// };

// // update user by id
// const updateUserById = async (id, userData) => {
//   const user = await userModel.findByIdAndUpdate(id, userData, {
//     new: true,
//   });
//   if (!user) {
//     throw new Error('User not found');
//   }
//   return user;
// };

// // delete user by id
// const deleteUserById = async (id) => {
//   const user = await userModel.findByIdAndDelete(id);
//   if (!user) {
//     throw new Error('User not found');
//   }
//   return user;
// };

// module.exports = {
//   getAllUsers,
//   getUserById,
//   createUser,
//   updateUserById,
//   deleteUserById,
// };

import { exportDB } from "../models/index.js";
const Users = exportDB.users;
import { error } from "../common/statusConstants.js";
import pkg from "lodash";
const { get, isEmpty, isObject, omit, find, chain, has } = pkg;
import { dataPagination } from "../common/helper.js";

// Create users
export const create = async (fullName, phone, email, password, confirmPassword, dateOfBirth, address, gender, role,) => {
    let responseData = error;
    const users = await Users.create({
        fullName, phone, email, password, confirmPassword, dateOfBirth, address, gender, role,
    });
    responseData = {
        status: 200,
        message: "user create successfully",
        success: true,
    };
    return responseData;
};

export const getAllUsers = async (req) => {
    let responseData = error;
    const entityParams = get(req, "query", {});
    const searchText = get(entityParams, "q", "");
    let defaultWhere = {};

    if (has(entityParams, "q") && !isEmpty(searchText)) {
        defaultWhere = {
            [Op.or]: {
                fullName: { [Op.like]: `%${searchText}%` },
                role: { [Op.like]: `%${searchText}%` },
                typeOfAsset: sequelize.where(
                    sequelize.cast(sequelize.col("user.typeOfAsset"), "varchar"),
                    {
                        [Op.like]: `%${searchText}%`,
                    }
                ),
            },
            // isActive: true,
        };
    }

    try {
        const { offset, limit, pagination } = dataPagination(entityParams);

        const userDeatail = await Users.findAndCountAll({
            offset: offset,
            limit: limit,
            order: [["id", "DESC"]],
        });
        if (userDeatail.rows.length > 0) {
            pagination["totalPages"] = Math.ceil(
                (userDeatail || userDeatail).count / pagination.pageSize
            );
            pagination["pageRecords"] = ((userDeatail || {}).rows || []).length || 0;

            responseData = {
                status: 200,
                message: "user data fetch successfully",
                pagination,
                data: userDeatail,
                success: true,
            };
        } else {
            responseData = {
                status: 400,
                message: "user not exist",
                success: false,
            };
        }
    } catch (error) {
        responseData = { status: 400, message: error.message, success: false };
    }
    return responseData;
};

// Get user by id
export const getUserById = async (id) => {
    const users = await Users.findOne({ where: { id: id }, });
    if (!users) {
        return { status: 404, message: "User not found", success: false };
    }
    return users;
};

// Delete user by id
export const deleteUserById = async (id) => {
    const usersCheck = await Users.findOne({ where: { id: id }, });
    if (!usersCheck) {
        return { status: 404, message: "User not found", success: false };
    }
    let responseData = error;
    const users = await Users.destroy({ where: { id: id }, });

    responseData = {
        status: 200,
        message: "user id " + id + " deleted successfully",
        success: true,
    };
    return responseData;
};

// update user by id
export const updateUserById = async (id, userData) => {
    let responseData = {};
    try {
        const user = await Users.findOne({ where: { id: id } });
        if (!user) {
            responseData = {
                status: 404,
                message: "User not found",
                success: false,
            };
        } else {
            await user.update(userData);
            responseData = {
                status: 200,
                message: "Data updated successfully",
                success: true,
            };
        }
    } catch (error) {
        responseData = { status: 400, message: error.message, success: false };
    }
    return responseData;
};