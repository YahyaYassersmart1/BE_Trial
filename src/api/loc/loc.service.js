const LOC = require('./loc.model');

class LOCService {
    static async createLOC(data) {
        const loc = new LOC(data);
        await loc.save();
        return loc;
    }

    static async getLOCById(id) {
        return await LOC.findById(id).populate('location_id');
    }

    static async updateLOC(id, data) {
        const loc = await LOC.findByIdAndUpdate(id, data, { new: true });
        return loc;
    }

    static async deleteLOC(id) {
        await LOC.findByIdAndRemove(id);
    }

    static async getAllLOCs() {
        return await LOC.find().populate('location_id');
    }
}

module.exports = LOCService;
