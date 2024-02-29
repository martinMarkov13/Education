const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.login = async (username, password) => {
  const user = await User.findOne({ username });

  if(!user){
    throw new Error('Invalid user or password!')
  }
  
  const isValid = await bcrypt.compare(password, user.password)

  if(!isValid){
    throw new Error('Invalid user or password!')
  }
};

exports.register = async (userData) => {
  const user = await User.findOne({ username: userData.username });

  if (user) {
    throw new Error("Username already exists!");
  }

  User.create(userData);
};
