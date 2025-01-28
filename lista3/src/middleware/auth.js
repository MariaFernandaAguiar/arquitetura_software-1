const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        const authorizationHeader = req.header('Authorization');

        if (!authorizationHeader) {
            return res.status(401).json({ message: 'Token não fornecido.' });
        }

        const token = authorizationHeader.replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        req.userId = decoded.id;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Autenticação falhou.' });
    }
};

module.exports = authMiddleware;
