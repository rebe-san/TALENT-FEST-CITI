
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');


// User Model
const User = require('../../models/User');

// @route   POST api/users
// @desc    Register new user
// @access  Public
router.post('/', (req, res) => {
  const { name, lastname,email,password,street,num_ext,num_int, colonia,cp,phone,number_id,curp } = req.body;

  // Simple validation
  if(!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if(user) return res.status(400).json({ msg: 'User already exists' });
      else{    
      const newUser = new User({
        name,
        lastname,
        email,
        password,
        street,
        num_ext, 
        num_int,
        colonia,
        cp,
        phone,
        number_id,
        curp
      });

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 3600 },
                (err, token) => {
                  if(err) throw err;
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      name: user.name,
                      email: user.email,
                      lastname:user.lastname,
                      street:user.street,
                      num_ext:user.num_ext, 
                      num_int:user.num_int,
                      colonia:user.colonia,
                      cp:user.cp,
                      phone:user.phone,
                      number_id:user.number_id,
                      curp:user.curp
                    }
                  });
                }
              )
            });
        })
      })
    }
    })
    
});

module.exports = router
