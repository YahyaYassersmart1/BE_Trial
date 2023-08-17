const ProjectService = require('./project.service');
const logger = require('../../utils/logger');

class ProjectController {
    static async createProject(req, res) {
        try {
            const project = await ProjectService.createProject(req.body);
            res.status(201).send(project);
        } catch (error) {
            logger.error(error.message);
            res.status(400).send(error.message);
        }
    }

    static async getProject(req, res) {
        try {
            const project = await ProjectService.getProjectById(req.params.id);
            res.send(project);
        } catch (error) {
            logger.error(error.message);
            res.status(404).send(error.message);
        }
    }

    static async updateProject(req, res) {
        try {
            const project = await ProjectService.updateProject(req.params.id, req.body);
            res.send(project);
        } catch (error) {
            logger.error(error.message);
            res.status(400).send(error.message);
        }
    }

    static async deleteProject(req, res) {
        try {
            await ProjectService.deleteProject(req.params.id);
            res.send({ message: 'Project deleted successfully' });
        } catch (error) {
            logger.error(error.message);
            res.status(400).send(error.message);
        }
    }

    static async getAllProjects(req, res) {
        try {
            const projects = await ProjectService.getAllProjects();
            res.send(projects);
        } catch (error) {
            logger.error(error.message);
            res.status(400).send(error.message);
        }
    }
}

module.exports = ProjectController;
