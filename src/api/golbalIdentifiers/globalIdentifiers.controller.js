const GlobalIdentifierService = require('./globalIdentifier.service');
const logger = require('../../utils/logger');

class GlobalIdentifierController {
    static async createGlobalIdentifier(req, res) {
        try {
            const globalIdentifier = await GlobalIdentifierService.createGlobalIdentifier(req.body);
            res.status(201).send(globalIdentifier);
        } catch (error) {
            logger.error(error.message);
            res.status(400).send(error.message);
        }
    }

    static async getGlobalIdentifier(req, res) {
        try {
            const globalIdentifier = await GlobalIdentifierService.getGlobalIdentifierById(req.params.id);
            res.send(globalIdentifier);
        } catch (error) {
            logger.error(error.message);
            res.status(404).send(error.message);
        }
    }

    static async updateGlobalIdentifier(req, res) {
        try {
            const globalIdentifier = await GlobalIdentifierService.updateGlobalIdentifier(req.params.id, req.body);
            res.send(globalIdentifier);
        } catch (error) {
            logger.error(error.message);
            res.status(400).send(error.message);
        }
    }

    static async deleteGlobalIdentifier(req, res) {
        try {
            await GlobalIdentifierService.deleteGlobalIdentifier(req.params.id);
            res.send({ message: 'Global Identifier deleted successfully' });
        } catch (error) {
            logger.error(error.message);
            res.status(400).send(error.message);
        }
    }

    static async getAllGlobalIdentifiers(req, res) {
        try {
            const globalIdentifiers = await GlobalIdentifierService.getAllGlobalIdentifiers();
            res.send(globalIdentifiers);
        } catch (error) {
            logger.error(error.message);
            res.status(400).send(error.message);
        }
    }
}

module.exports = GlobalIdentifierController;
