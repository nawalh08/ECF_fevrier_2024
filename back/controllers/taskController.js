const { Task } = require("../config/db");


exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.json(tasks);
    } catch (error) {
        res
            .status(500)
            .json({ message: "Erreur lors de la récupération des tâches" });
    }
};

exports.createTask = async (req, res) => {
    try {
        const {title_task,description_task, priorities_task,dateLast} = req.body;
     await Task.create({title_task,description_task,priorities_task,dateLast});
        res.status(201).json("La tâche a été créer");
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Erreur lors de l'ajout de la tâche" });
    }
};

exports.getTaskById = async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await Task.findById(taskId);

        if (!task) {
            return res.status(404).json("la tâche est inconnu");
        }

        res.status(200).json({ task });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.updateTask = async (req, res) => {
    try {
        await Task.update({ title_task,description_task, priorities_task,dateLast} = req.body, { where: { id_task: req.params.id } })
        const updatedTask = await Task.findOne({ where: { id_task: req.params.id } })
        res.status(201).json(updatedTask);
    } catch (error) { 
        res.status(500).json({ message: "Tâche introuvable ! " })
    }
};

exports.deleteTask = async (req, res) => {
    try {

        // const taskId = req.params.id;

        // const taskDelete = await Task.findById(taskId);

        await Task.destroy({where :{id_task: req.params.id } });

        res.status(200).json({ message: `La tâche à bien été supprimé !` })
    } catch (error) {
        res.status(500).json({ message: "La tâche est introuvable ! " })
    }
};




