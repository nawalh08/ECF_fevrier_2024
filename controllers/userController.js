const { User } = require("../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.getAllUsers = async (req, res) => {
  try {
    const Users = await User.findAll();
    res.json(Users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des utilisateurs" });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { username, password , role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username: username, password: hashedPassword , role:role });
    await newUser.save();
    res.status(201).json({ message: "Utilisateur ajouté !" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.connectUser = async (req, res) => {
  try {
    const {username , password} = req.body; 
    const user = await User.findOne({username});
    if(!user) {
      return res.status(401).json({message:"l'utilisateur ou le mot de passe est incorrect "});
    }
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res
        .status(401)
        .json({ message: "Utilisateur ou mot de passe incorrect" });
    }

    const token = jwt.sign({ userId: user.id }, "RANDOM_TOKEN_SECRET", {
      expiresIn: "24h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

