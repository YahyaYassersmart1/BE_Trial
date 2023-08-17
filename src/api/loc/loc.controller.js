const LOCService = require('./loc.service');
const logger = require('../../utils/logger');

class LOCController {
    static async createLOC(req, res) {
        try {
            const loc = await LOCService.createLOC(req.body);
            res.status(201).send(loc);
        } catch (error) {
            logger.error(error.message);
            res.status(400).send(error.message);
        }
    }

    static async getLOC(req, res) {
        try {
            const loc = await LOCService.getLOCById(req.params.id);
            res.send(loc);
        } catch (error) {
            logger.error(error.message);
            res.status(404).send(error.message);
        }
    }

    static async updateLOC(req, res) {
        try {
            const loc = await LOCService.updateLOC(req.params.id, req.body);
            res.send(loc);
        } catch (error) {
            logger.error(error.message);
            res.status(400).send(error.message);
        }
    }

    static async deleteLOC(req, res) {
        try {
            await LOCService.deleteLOC(req.params.id);
            res.send({ message: 'LOC deleted successfully' });
        } catch (error) {
            logger.error(error.message);
            res.status(400).send(error.message);
        }
    }

    static async getAllLOCs(req, res) {
        try {
            const locs = await LOCService.getAllLOCs();
            res.send(locs);
        } catch (error) {
            logger.error(error.message);
            res.status(400).send(error.message);
        }
    }
}

module.exports = LOCController;
