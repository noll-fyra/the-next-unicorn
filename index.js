// set up express
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// set the layout
app.use(express.static('public'))
app.set('view engine', 'ejs')
// app.use(ejsLayouts)

// set up json data
var companies = require('./companies.json')
var products = require('./products.json')

app.use((req, res) => {
  res.render('./index', {companies: companies, products: products})
})

app.listen(port, () => {
  console.log('App is running on port: ' + port)
})
