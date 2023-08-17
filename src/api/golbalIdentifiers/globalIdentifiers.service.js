const GlobalIdentifier = require('./globalIdentifier.model');

class GlobalIdentifierService {
    static async createGlobalIdentifier(data) {
        const globalIdentifier = new GlobalIdentifier(data);
        await globalIdentifier.save();
        return globalIdentifier;
    }

    static async getGlobalIdentifierById(id) {
        return await GlobalIdentifier.findById(id);
    }

    static async updateGlobalIdentifier(id, data) {
        const globalIdentifier = await GlobalIdentifier.findByIdAndUpdate(id, data, { new: true });
        return globalIdentifier;
    }

    static async deleteGlobalIdentifier(id) {
        await GlobalIdentifier.findByIdAndRemove(id);
    }

    static async getAllGlobalIdentifiers() {
        return await GlobalIdentifier.find();
    }
}

module.exports = GlobalIdentifierService;
