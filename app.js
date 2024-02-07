const express = require("express");
const DB = require("./config/db");
const userRouter = require("./routes/userRouter");
const taskRouter = require("./routes/taskRouter");


const app = express();
const port = 3000;

app.use(express.json())
.use("/api/users", userRouter)
.use("/api/tasks", taskRouter )

DB.sequelize
  .authenticate()
  .then(() => console.log("Connexion avec la base de données réussie"))
  .then(() => {
    app.listen(port, () => {
      console.log("http://localhost:", port);
    });
  })
  .catch((err) => {
    console.log(
      "Erreur lors de la connexion à la base de données",
      err.message
    );
  });
