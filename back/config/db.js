const Sequelize = require("sequelize");

const sequelize = new Sequelize("ecf", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

// Synchronisation des modèles
const User = require("../models/User")(sequelize);
const Task = require("../models/Task")(sequelize);
const Project = require("../models/Project")(sequelize);


sequelize
  .sync({ force: false})
  .then(() => console.log("La base de données à bien été synchronisée"))
  .catch((error) =>
    console.error("Problème lors de la synchronisation :", error.message)
  );

module.exports = {
  sequelize,
   Task,
   Project,
   User,
};
