const express = require('express');
const isAuth = require('../../utils/auth/middlewares/authMiddlewares');
const controller = require('./project.controllers');
const router = express.Router();
const {upload} = require('../../middleware/files.middleware');

router.get('/', controller.getProjects);
router.get('/:id', controller.getProjectById);
router.post('/create', [isAuth, upload.single('images')], controller.createProject);
router.put('/edit/:id', [isAuth], controller.editProject);
router.delete('/delete/:id', isAuth, controller.deleteProject);

module.exports = router;