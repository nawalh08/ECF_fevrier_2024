const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Task = sequelize.define("Task", {
        id_task: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title_task: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description_task: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        priorities_task: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateLast: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    return Task;
};