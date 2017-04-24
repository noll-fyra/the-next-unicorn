// set up hidden secret
require('dotenv').config({silent: true})

// set up express
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// add layouts, middleware, session, authentication and flash
// const ejsLayouts = require('express-ejs-layouts')
var companies = require('./companies.json')
var products = require('./products.json')
// console.log(parse(companies.json));
// set the layout
app.use(express.static('public'))
app.set('view engine', 'ejs')
// app.use(ejsLayouts)

app.use('/', (req, res) => {
  res.render('./index', {companies: companies, products: products})
})

app.use((req, res) => {
  res.redirect('/')
})
app.listen(port, () => {
  console.log('App is running on port: ' + port)
})
