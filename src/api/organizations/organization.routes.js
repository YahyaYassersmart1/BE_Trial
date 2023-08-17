const express = require('express');
const OrganizationController = require('./organization.controller');

const router = express.Router();

router.post('/', OrganizationController.createOrganization);
router.get('/:id', OrganizationController.getOrganization);
router.put('/:id', OrganizationController.updateOrganization);
router.delete('/:id', OrganizationController.deleteOrganization);
router.get('/', OrganizationController.getAllOrganizations);

module.exports = router;
