const { User } = require("../config/db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Blacklist = require('../models/Blacklist');


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

exports.logoutUser = async (req, res) => {
  try {
    const authHeader = req.headers['cookie']; // Obtenez le cookie de session à partir de l'en-tête de la requête
    if (!authHeader) return res.sendStatus(204); // Pas de contenu
    const cookie = authHeader.split('=')[1]; // S'il y en a un, divisez la chaîne de cookie pour obtenir le jeton JWT réel
    const accessToken = cookie.split(';')[0];
    const [blacklist, created] = await Blacklist.findOrCreate({
      where: { token: accessToken },
      defaults: { token: accessToken }
    }); // Vérifiez si ce jeton est sur liste noire
    // Si vrai, envoyez une réponse sans contenu.
    if (!created) return res.sendStatus(204);
    // Sinon, ajoutez le token à la liste noire
    // Vous pouvez ajouter une logique supplémentaire ici si nécessaire, par exemple pour mettre à jour la date de création
    // ou pour gérer les jetons précédemment ajoutés à la liste noire
    res.setHeader('Clear-Site-Data', '"cookies"');
    res.status(200).json({ message: 'You are logged out!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
}