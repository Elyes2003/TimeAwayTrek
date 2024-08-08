const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    phoneNumber: { type: String, required: false},
    salary: { type: Number, required: false},
    nb_days: { type: Number, required: false},
});

// Method to generate auth token
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id, email: this.email },process.env.JWTPRIVATEKEY, { expiresIn: '7d' });
    return token;
};

module.exports = mongoose.model('User', userSchema);
