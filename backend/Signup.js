const mongoose = require('mongoose')

const SignupSchema = mongoose.Schema({
    name: {type:String, required: true},
    username: {type:String, required: true},
    email: {type:String, required: true},
    password: {type:String, required: true}
})

module.exports = mongoose.model('signupschema', SignupSchema)