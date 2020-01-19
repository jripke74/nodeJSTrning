const path = require('path') // this is built in
const express = require('express') // load via npm
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs') // need to load hbs via npm
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to server
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Jeff Ripke'
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Jeff Ripke'
  })
})

app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'Help',
    title: 'Help',
    name: 'Jeff Ripke'
  })
})

app.get('/weather', (req, res) => {
  res.send({
    forcast: 'It is snowing',
    location: 'Spokane'
  })
})

app.get('/help/*', (req, res) => {
  res.send('Help aricle not found')
})

app.get('*', (req, res) => {
  res.render('404', {
    title: '404 page not found',
    name: 'Jeff Ripke'
  })
})

app.listen(3002, () => {
  console.log('Server started on port 3002.')
})