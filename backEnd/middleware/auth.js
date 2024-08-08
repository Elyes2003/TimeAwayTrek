const jwt = require('jsonwebtoken');

const Auth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ error: "No token provided" });
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Token format invalid" });
        }

        const decodedToken = await jwt.verify(token, process.env.JWTPRIVATEKEY);
        req.user = decodedToken;

        next();
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            res.status(401).json({ error: "Token expired" });
        } else if (error.name === 'JsonWebTokenError') {
            res.status(401).json({ error: "Invalid token" });
        } else {
            res.status(500).json({ error: "Authentication failed" });
        }
    }
};

module.exports = Auth;
