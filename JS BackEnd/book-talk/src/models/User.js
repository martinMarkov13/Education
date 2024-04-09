const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    unique: [true, "Username already exists!"],
    minLength: [4, "Username is too short!"]
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    minLength: [10, "Email must be at least 10 characters long"]
  }, 
  password: {
    type: String,
    required: [true, "Password is required!"],
    minLength: [3, "Password must be at least 3 characters long"]
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
