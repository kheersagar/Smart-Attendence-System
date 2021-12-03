const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    salt: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    profileColor: {
        type: String,
    },
    subject: [{
        type: String
    }],
    otp: {
        type: Number
    },
    optTime: {
        type : Date
    }
})


const user = mongoose.model("user", userSchema);

module.exports = {
    user: user,
}