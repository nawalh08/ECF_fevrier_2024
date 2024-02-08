const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Project = sequelize.define("Project", {
        id_project: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name_project: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description_project: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    
    });

    return Project;
};