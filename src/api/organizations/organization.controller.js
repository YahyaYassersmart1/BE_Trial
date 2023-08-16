const Organization = require('./organization.model');

exports.createOrganization = async (req, res) => {
    const organization = new Organization(req.body);
    await organization.save();
    res.status(201).send('Organization Created');
};

exports.getOrganizations = async (req, res) => {
    const organizations = await Organization.find();
    res.status(200).json(organizations);
};

exports.updateOrganization = async (req, res) => {
    await Organization.findByIdAndUpdate(req.params.org_id, req.body);
    res.status(200).send('Organization Updated');
};

exports.deleteOrganization = async (req, res) => {
    await Organization.findByIdAndDelete(req.params.org_id);
    res.status(200).send('Organization Deleted');
};
