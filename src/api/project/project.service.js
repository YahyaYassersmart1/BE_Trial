const Project = require('./project.model');

class ProjectService {
    static async createProject(data) {
        const project = new Project(data);
        await project.save();
        return project;
    }

    static async getProjectById(id) {
        return await Project.findById(id).populate('globalIdentifier_id');
    }

    static async updateProject(id, data) {
        const project = await Project.findByIdAndUpdate(id, data, { new: true });
        return project;
    }

    static async deleteProject(id) {
        await Project.findByIdAndRemove(id);
    }

    static async getAllProjects() {
        return await Project.find().populate('globalIdentifier_id');
    }
}

module.exports = ProjectService;
