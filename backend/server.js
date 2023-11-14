// require("dotenv").config()
const joi = require('joi')
const cors = require('cors')
const express = require('express')
const app = express()
const SignupSchema = require("./Signup")
const ConnectToDb = require('./db');
const { signUp, login } = require('./controllers/authController')
const PORT = 8000;
// const regex = new RegExp("pattern");

const passPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}/

ConnectToDb()

app.use(express.json());
app.use(cors({
    origin: "*", // Allow requests from a specific origin
    methods: 'GET,POST', // Allow only specified HTTP methods
  }));
  

app.post('/signup',signUp )
app.post('/login',login)


app.listen(PORT, () => {
    console.log('server is started')
})