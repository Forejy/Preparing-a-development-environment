const express = require('express')
const devBundle = require('./devBundle') //To comment in production
const path = require('path')
const template = require('./../template')
const { MongoClient } = require('mongodb')
require('dotenv').config()

const app = express()
devBundle.compile(app) //To comment in production

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))


app.get('/', (req, res) => {
	res.status(200).send(template())
})

let port = process.env.PORT || 3000
app.listen(port, (err) => {
	if (err) {
		console.log(err)
	}
	console.info('Server started on port %s.', port)
})

const url = process.env.MONGODB_URI
MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, (err, db) => {
	console.log("Connected successfully to mongodb server")
	db.close()
})