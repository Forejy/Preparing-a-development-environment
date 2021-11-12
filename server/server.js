import express from 'express'
import devBundle from './devBundle' //To comment in production

const app = express()
devBundle.compile(app) //To comment in production