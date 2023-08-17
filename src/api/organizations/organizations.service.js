const Organization = require('./organization.model');

class OrganizationService {
    static async createOrganization(data) {
        const organization = new Organization(data);
        await organization.save();
        return organization;
    }

    static async getOrganizationById(id) {
        return await Organization.findById(id);
    }

    static async updateOrganization(id, data) {
        const organization = await Organization.findByIdAndUpdate(id, data, { new: true });
        return organization;
    }

    static async deleteOrganization(id) {
        await Organization.findByIdAndRemove(id);
    }

    static async getAllOrganizations() {
        return await Organization.find();
    }
}

module.exports = OrganizationService;
