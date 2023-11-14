const joi = require("joi");
const SignupSchema = require("../Signup");
const LoginSchema = require('../Login')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const passPattern =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}/;
const JWT_SECRET = "ChronoSpecterYt is a Pr@ G@mer";

const signUp = async (req, res) => {
  const SignupValidation = joi.object({
    name: joi.string().min(5).max(25).required(),
    username: joi.string().min(5).max(25).required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(passPattern).required(),
  });

  const { error } = await SignupValidation.validate(req.body);

  if (error) {
    return res.status(401).send({ success: false, message: error?.message });
  }

  const { username, email, name, password } = req.body;

  const usernameExist = await SignupSchema.findOne({ username });
  const emailExist = await SignupSchema.findOne({ email });

  if (usernameExist) {
    return res.status(401).send({
      success: false,
      message: "This username already exists",
    });
  }
  if (emailExist) {
    return res.status(401).send({
      success: false,
      message: "This email already exists",
    });
  }

  // const Salt = await bcrypt.genSalt(10);
  // const HashPass = await bcrypt.hash(password, 10);
  
  let a = await SignupSchema.create({ email, username, name, password });

  const AuthToken = await jwt.sign({_id: a._id}, JWT_SECRET);
  
  console.log(a._id);
  console.log(a.HashPass);
  res.status(200).send({ success: true, message: 'Signup Successfully', AuthToken:AuthToken});
};

const login = async (req, res) => {
  const { name, username, email, password } = req.body
  const user = await SignupSchema.findOne({ email: email });
  if (user) {
    if (password === user.password) {
      let a = await LoginSchema.create({ email, username, name, password });
      const AuthToken = await jwt.sign({_id: a._id}, JWT_SECRET);
      res.send({success: true, message:"Login sucessfully", user: user, AuthToken: AuthToken})
    }
    else{
      res.send({message: "user doesn't match"})
    }
  }
  else{
    res.send({message: "User doesn't exist"})
  }
};

module.exports = { signUp, login };
