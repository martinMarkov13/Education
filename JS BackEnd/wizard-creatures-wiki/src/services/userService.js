const bcrypt = require("bcrypt");

const jwt = require('../lib/jwt')
const User = require("../models/User");
const { SECRET } = require('../config/config')

exports.login = async (email, password) => {
  const user = await User.findOne({ email });

  if(!user){
    throw new Error('Invalid user or password!')
  }
  
  const isValid = await bcrypt.compare(password, user.password)

  if(!isValid){
    throw new Error('Invalid user or password!')
  } 

    const token = await generateToken(user)

    return token;
};

exports.register = async (userData) => {
  const user = await User.findOne({ email: userData.email });

  if (user) {
    throw new Error("Email already exists!");
  }
  const createUser = await User.create(userData)
  
  const token = await generateToken(createUser) 
  
  return token;
};

exports.getVoters = async (users) => {
  const voters = await User.find({_id : users}).lean()

  return voters;
}

async function generateToken(user){
  const payload = {
    _id:user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email
  }

  const token = await jwt.sign(payload, SECRET, {expiresIn: '1d'})

  return token;
}