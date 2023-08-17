const express = require('express');
const ProjectController = require('./project.controller');

const router = express.Router();

router.post('/', ProjectController.createProject);
router.get('/:id', ProjectController.getProject);
router.put('/:id', ProjectController.updateProject);
router.delete('/:id', ProjectController.deleteProject);
router.get('/', ProjectController.getAllProjects);

module.exports = router;
