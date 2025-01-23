const User = require('../models/User');


class UserController {

    async login(req, res) {
     
        const { email, password } = req.body;
     
        const user = await User.query
     
        .where('email', email)
     
        .andWhere('password', password)
     
        .first();
     
        if (user) { 
     
            return res.status(200).json(user);
     
        }
     
        return res.status(401).json({ message: 'Invalid credentials' });

    }

  
}

module.exports = UserController
