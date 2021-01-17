const jwt = require('jsonwebtoken');
const UserDAO = require('../dao/UserDAO');
const { hashPassword, comparePassword } = require('../util/hash');
const { userSchema, credentialsSchema } = require('../schemas/schemas');
const { cookieConfig, jwtOptions, secret } = require('../config/config');

module.exports = {

  async register(req, res) {
    try {
      const user = await userSchema.validateAsync(req.body);
      user.password = await hashPassword(user.password);
      const [result] = await UserDAO.createUser(user);
      res.json({id: result.insertId});
    } catch (error) {
      console.error(error);
      res.status(500).json(error);
    }
  },

  async authenticate(req, res) {
    try {
      const credentials = await credentialsSchema.validateAsync(req.body);
      const [result] = await UserDAO.getUserByEmail(credentials.email);

      if(result.length > 0 && await comparePassword(credentials.password, result[0].password)) {
        
        const payload = {
          "user_id": result[0].id
        };
        const token = jwt.sign(payload, secret, jwtOptions);
        console.log(token);
        res.cookie('token', token, cookieConfig);
        res.json({name: result[0].name, surname: result[0].surname});

      } else {
        res.status(401).json({ message: 'Invalid credentials'});
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
};