const { DataTypes } = require("sequelize");
// const sequelize = require('../config/db'); // Assurez-vous d'importer correctement votre instance Sequelize

module.exports = (sequelize) => {
    const Blacklist = sequelize.define("Blacklist", {
        token: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'User', // Assurez-vous de remplacer 'User' par le nom de votre modèle d'utilisateur Sequelize
                key: 'token' // Assurez-vous que la clé de référence correspond à celle dans votre modèle d'utilisateur Sequelize
            }
        }
    }, {
        timestamps: true,
        modelName: 'blacklist'
    });

    return Blacklist;
};