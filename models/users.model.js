export default (sequelize, Sequelize) => {
    const Users = sequelize.define("user", {
        fullName: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.INTEGER
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        confirmPassword: {
            type: Sequelize.STRING
        },
        dateOfBirth: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        gender: {
            type: Sequelize.STRING
        },
        role: {
            type: Sequelize.STRING
        },
    });

    return Users;
};