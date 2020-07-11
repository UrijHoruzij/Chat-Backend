const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  refreshToken: {
    token: {
      type: String,
    },
    fingerprint: {
      type: Object,
    },
  },
  fullname: {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
  },
  dialogs: {
    type: Array,
  },
  avatar: {
    type: String,
  },
});

module.exports = User = mongoose.model("User", UserSchema);
