const express = require('express');
const LOCController = require('./loc.controller');

const router = express.Router();

router.post('/', LOCController.createLOC);
router.get('/:id', LOCController.getLOC);
router.put('/:id', LOCController.updateLOC);
router.delete('/:id', LOCController.deleteLOC);
router.get('/', LOCController.getAllLOCs);

module.exports = router;
