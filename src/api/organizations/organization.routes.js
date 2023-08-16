const express = require('express');
const OrganizationController = require('./organization.controller');
const authorizationMiddleware = require('../../middlewares/authorization.middleware');
const router = express.Router();

router.post('/', authorizationMiddleware('SAAS Admin'), OrganizationController.createOrganization);
router.get('/', authorizationMiddleware('SAAS Admin'), OrganizationController.getOrganizations);
router.put('/:org_id', authorizationMiddleware('SAAS Admin'), OrganizationController.updateOrganization);
router.delete('/:org_id', authorizationMiddleware('SAAS Admin'), OrganizationController.deleteOrganization);

module.exports = router;
