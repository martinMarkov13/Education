const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Firstname is required!"],
    unique: [true, "First name already exists!"],
    minLength: [3, "First name is too short!"]
  },
  lastname: {
    type: String,
    required: [true, "Lastname is required!"],
    unique: [true, "Lastname already exists!"],
    minLength: [3, "Lastname is too short!"]
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    minLength: [10, "Email must be at least 10 characters long!"]
  }, 
  password: {
    type: String,
    required: [true, "Password is required!"],
    minLength: [4, "Password is too short!"]
  },
});

userSchema.virtual('repeatPassword')
.set(function(value){
    if(value !== this.password){
        throw new Error('Password missmatch!')
    }
});

userSchema.pre('save', async function(){
	const hash = await bcrypt.hash(this.password, 10)

	this.password = hash;
})

const User = mongoose.model("User", userSchema);

module.exports = User;
