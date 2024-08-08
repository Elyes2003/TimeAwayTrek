const User = require('../models/user'); 

//check if user exist in database
const verifyUser = async (request, response, next) => {
    try {
        const email = request.method === "GET" ? request.query.email : request.body.email;

        let exist = await User.findOne({ email });
        if (!exist) return response.status(404).send({ error: "Cannot find user!" });
        next();
    } catch (err) {
        response.status(500).send({ message: err.message });
    }
};

module.exports = verifyUser;
