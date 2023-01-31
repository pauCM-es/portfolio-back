const Project = require('./project.model');

//GET
const getProjects = async (req, res, next) => {
  try {
    console.log('USUARION LOGEADO: ', req.user);
    
    const allProjects = await Project.find();
    return res.status(200).json(allProjects);
  }
  catch(error) {
    return next(error)
  }
}

const getProjectById = async (req, res, next) => {
  try {
    const {id} = req.params;
    const project = await Project.findById(id);
    return res.status(200).json(project);
  }
  catch(error) {
    return next(error);
  }
}

//POST
const createProject = async (req, res, next) => {
  try {
    const data = {...req.body} 
    const projectToCreate = new Project(data);
    const created = await projectToCreate.save();

    return res.status(201).json(created);
  }
  catch(error) {
    return next(error);
  }
}


//PUT
const editProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const fields = {...req.body};
    const options = { new: true };
    const edited = await Project.findByIdAndUpdate(id, fields, options)
    return res.status(200).json(edited);
  }
  catch(error) {
    return next(error);
  }
}


//DELETE
const deleteProject = async (req, res, next) => {
  try {
    const { id } = req.params;
    const  deleted = await Project.findByIdAndDelete(id);
    return res.status(200).json(deleted)
  }
  catch(error) {
    return next(error)
  }
}


module.exports = {
  getProjects,
  getProjectById,
  createProject,
  editProject,
  deleteProject
}