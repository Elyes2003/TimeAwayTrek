const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    typeLeave: { type: String, required: true },
    startDate: { type: Date, required: true },
    finishDate: { type: Date, required: true },
    days:{ type: String, required: true },
    justification: { type: String, required: true },
    justificationFile: { type: String, required: false },
    statut: { type: String, required: true },
    user_id:{ type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true},
},{timestamps: true});

module.exports = mongoose.model('Leave', leaveSchema);
