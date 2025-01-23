const jwt = require('jsonwebtoken');
const User = require('../models/User');


class AuthController {

    async login (req,res) {
        const {email_user, password_user} = req.body;
        
        const user = await User.query().findOne({ email_user });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isValidPassword = user.verifyPassword(password_user);
        if(!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
    }
}

module.exports = AuthController;
