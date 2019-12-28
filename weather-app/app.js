const request = require('request')

const url = 'https://api.darksky.net/forecast/a0a33a259c4028bb4952620e87d26637/47.658779,-117.426048?lang=en&units=us'
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoianJpcGtlNzQiLCJhIjoiY2s0b2dwd3ppMXBrZTNqb2dhdXNvZWE3ciJ9.4Yqp4FeXVMIP69OMLwrRlg'

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service!')
//   } else if (response.body.error) {
//     console.log('Unable to find location')
//   } else {
//     const currentTemperature = response.body.currently.temperature
//     const probOfParticipation = response.body.currently.precipProbability
//     const dailySummary = response.body.daily.data[0].summary
//     console.log(`${dailySummary} It is currently ${currentTemperature} degrees out. There is a ${probOfParticipation}% chance of snow.`)
//   }
// })

// request({ url: geocodeUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to geo location service')
//   } else if (response.body.features.length === 0) {
//     console.log('Unable to find location with current search terms.')
//   } else {
//     const latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]
//     console.log(`${latitude}, ${longitude}`)
//   }
// })

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoianJpcGtlNzQiLCJhIjoiY2s0b2dwd3ppMXBrZTNqb2dhdXNvZWE3ciJ9.4Yqp4FeXVMIP69OMLwrRlg`

  request({ url: url, json: true}, (error, response) => {
    if (error) {

    } else if () {

    } else {
      
    }
  })
}

geoCode('Spokane', (error, data) => {

})