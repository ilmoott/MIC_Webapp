const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Please, provide a stronger password.');
            }
        }
    },
    role:{
        type: String,
        trim: true
    },
    tokens: [{
        token: {
            type: String
        }
    }]
},
    {
        timestamps: true
    });

//method on the userSchema to find and match the credentials
userSchema.statics.findByCredentials = async (email, password) =>{
    const user = await User.findOne({email});

    if(!user){
        throw new Error ("Unable to login");
    } else {
        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            throw new Error('Unable to login');
        } else {
            return user;
        }
    }
}

//.pre middleware on the userSchema to hash the password right after its modified
userSchema.pre('save', async function(next){
    const user = this;

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});



const User = mongoose.model('User', userSchema);

module.exports = User;