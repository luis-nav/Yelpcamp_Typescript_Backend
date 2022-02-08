import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import passport from 'passport'
import passportLocal from 'passport-local'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

//Interfaces
import * as interfaces from 'interfaces'

//App Setup
const app = express()
app.use(express.json())
app.use(cors({origin: 'http://localhost:3000', credentials: true, preflightContinue: true}))
app.use(
    session({
        secret: process.env.SECRET || "thisshouldbeasecret",
        resave: true,
        saveUninitialized: true
    })
)

app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())


//Routes
app.get('/', (req,res) => {
    res.send("HELLO WORLD")
})

app.listen(8000, () => {
    console.log(`Listening on port ${8000}`)
})