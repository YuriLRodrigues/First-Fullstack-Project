const express = require('express')
const app = express()

const dotenv = require('dotenv')
const connectToDB = require('./database/connect')
dotenv.config()
const router = require('./express')
connectToDB()