const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minLength: [5, "Username must be at least 5 characters"]
    }, 
    email:{
        type: String, 
        required: true,
        minLength: [10, "Email must be at least 10 characters"]
    },
    password: {
        type: String,
        required: true,
        minLength: [4, "Password must be at least 4 characters long"]
    }
})

userSchema.virtual('repeatPassword')
.set(function(value) {
    if(this.password !== value){
        throw new Error("Password missmatch!")
    }
})

userSchema.pre('save', async function(){
    const hash = await bcrypt.hash(this.password, 10)

    this.password = hash;
})

const User = mongoose.model("User", userSchema)

module.exports = User;