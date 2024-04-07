const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

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
  var user = this;

  // Only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();

  // Generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // Hash the password using the generated salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      // Override the plaintext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', userSchema);