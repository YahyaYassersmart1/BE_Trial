const OrganizationService = require('./organization.service');
const logger = require('../../utils/logger');

class OrganizationController {
    static async createOrganization(req, res) {
        try {
            const organization = await OrganizationService.createOrganization(req.body);
            res.status(201).send(organization);
        } catch (error) {
            logger.error(error.message);
            res.status(400).send(error.message);
        }
    }

    static async getOrganization(req, res) {
        try {
            const organization = await OrganizationService.getOrganizationById(req.params.id);
            res.send(organization);
        } catch (error) {
            logger.error(error.message);
            res.status(404).send(error.message);
        }
    }

    static async updateOrganization(req, res) {
        try {
            const organization = await OrganizationService.updateOrganization(req.params.id, req.body);
            res.send(organization);
        } catch (error) {
            logger.error(error.message);
            res.status(400).send(error.message);
        }
    }

    static async deleteOrganization(req, res) {
        try {
            await OrganizationService.deleteOrganization(req.params.id);
            res.send({ message: 'Organization deleted successfully' });
        } catch (error) {
            logger.error(error.message);
            res.status(400).send(error.message);
        }
    }

    static async getAllOrganizations(req, res) {
        try {
            const organizations = await OrganizationService.getAllOrganizations();
            res.send(organizations);
        } catch (error) {
            logger.error(error.message);
            res.status(400).send(error.message);
        }
    }
}

module.exports = OrganizationController;
