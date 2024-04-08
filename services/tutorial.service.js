import { exportDB } from "../models/index.js";
const Tutorial = exportDB.tutorials;
import { error } from "../common/statusConstants.js";

const register = async (title, description, published) => {
    let responseData = error;
    const tutorials = await Tutorial.create({
        title, description, published
    });
    responseData = {
        status: 200,
        message: "user create successfully",
        success: true,
    };

    return responseData;
};

export const exportRegister = register;