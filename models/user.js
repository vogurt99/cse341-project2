const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate');

const userSchema = new mongoose.Schema({
  githubId: { type: String, required: true, unique: true },
  username: String,
  displayName: String
});

userSchema.plugin(findOrCreate);

module.exports = mongoose.model('user', userSchema);