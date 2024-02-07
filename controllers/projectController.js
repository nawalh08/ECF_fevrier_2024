const { Project } = require("../config/db");


exports.getAllProjects = async (req, res) => {
    try {
        const projects= await Project.findAll();
        res.json(projects);
    } catch (error) {
        res
            .status(500)
            .json({ message: "Erreur lors de la récupération des tâches" });
    }
};

exports.createProject = async (req, res) => {
    try {
        const {name_project,description} = req.body;
     await Project.create({name_project,description});
        res.status(201).json("Le projet a été créer");
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erreur lors de l'ajout du projet" });
    }
};

exports.getProjectById = async (req, res) => {
    try {
        const projectId = req.params.id;
        const project = await Project.findById(projectId);

        if (!project) {
            return res.status(404).json("le projet est inconnu");
        }

        res.status(200).json({ project });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateProject = async (req, res) => {
    try {
        await Project.update({ name_project,description} = req.body, { where: { id: req.params.id } })
        const updatedProject = await Project.findOne({ where: { id: req.params.id } })
        res.status(201).json(updatedProject);
    } catch (error) {
        res.status(500).json({ message: "Projet introuvable ! " })
    }
};

exports.deleteProject = async (req, res) => {
    try {

        const projectId = req.params.id;

        const projectDelete = await Project.findById(projectId);

        await projectDelete.destroy();

        res.status(200).json({ message: `Le projet à bien été supprimé !` })
    } catch (error) {
        res.status(500).json({ message: "Le projet est introuvable ! " })
    }
};
task



