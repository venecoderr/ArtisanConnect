const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; // You can adjust the number of rounds as needed

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
});

// Pre-save hook to hash the password
userSchema.pre('save', function(next) {
  // Check if the password has been modified (or is new)
  if (!this.isModified('password')) return next();

  // Generate a salt and hash the password
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(this.password, salt, (err, hash) => {
      if (err) return next(err);

      // Replace the plain password with the hashed one
      this.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', userSchema);
