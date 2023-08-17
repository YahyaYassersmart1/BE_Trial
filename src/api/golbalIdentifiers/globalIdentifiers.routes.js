const express = require('express');
const GlobalIdentifierController = require('./globalIdentifier.controller');

const router = express.Router();

router.post('/', GlobalIdentifierController.createGlobalIdentifier);
router.get('/:id', GlobalIdentifierController.getGlobalIdentifier);
router.put('/:id', GlobalIdentifierController.updateGlobalIdentifier);
router.delete('/:id', GlobalIdentifierController.deleteGlobalIdentifier);
router.get('/', GlobalIdentifierController.getAllGlobalIdentifiers);

module.exports = router;
