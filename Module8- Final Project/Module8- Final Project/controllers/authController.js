const User = require('../Models/userModel')
const bcrypt = require('bcryptjs');
const passport = require('passport');


exports.signUpUser = async(req, res) => {

    const {fname , lname ,email , password ,cpassword} = req.body;

    let errors = [];
    if (!fname || !email || !password || !cpassword || !lname) {
        errors.push({ msg: 'Please enter all fields' });
    }
    if (password != cpassword) {
        errors.push({ msg: 'Passwords do not match' });
    }
    if (password.length < 6) {
        errors.push({ msg: 'Password must be at least 6 characters' });
    }
    if (errors.length > 0) {
        res.render('registerUser', {errors,fname,lname,email,password,cpassword});
    } else {
        
        User.findOne({ email: email }).then(user => {
            if (user) {
              errors.push({ msg: 'Email already exists' });
              res.render('registerUser', {errors,fname,lname,email,password});
        } else{

            const newUser = new User({fname,lname,email,password});
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, async (err, hash) => {
                  if (err) throw err;
                  newUser.password = hash;
                  await newUser.save()
                    .then(user => {
                     req.flash(
                        'success_msg',
                        'You are now registered and can log in'
                    );
                    res.redirect('/login');
                })
                  .catch(err => console.log(err));
                });
            });
        }
    })
    }
};
 
exports.loginUser = async (req, res, next) => {

    passport.authenticate('local', {
        successRedirect: '/loans',
        failureRedirect: '/login',
        failureFlash: true
      })(req, res, next);

}

