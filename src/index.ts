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


const app = express()

app.listen(8000, () => {
    console.log(`Listening on port ${8000}`)
})