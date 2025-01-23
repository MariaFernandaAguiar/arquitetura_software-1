const jwt = require('jsonwebtoken');
const User = require('../models/User');
const dotenv = require('dotenv');

dotenv.config();

class UserController {

    
    async login (req,res) {
        
        const {email_user, password_user} = req.body;
        
        const user = await User.findByEmail(email_user);
        
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isValidPassword = await user.verifyPassword(password_user);

        if(!isValidPassword) {
        
            return res.status(401).json({ message: 'Invalid credentials' });
        
        }

        const token = jwt.sign({ id: user.id_user }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(200).json({ token });
    }

    async register (req,res) {
        
        const {new_name , new_email, new_password} = req.body;

        const user = await User.addNewUser(new_name,new_email,new_password);

        if (!user) {
            
            return res.status(401).json({ message: 'Invalid credentials' });
        
        }

        return res.status(200).json({ user });
    }
  
}

module.exports = UserController
