const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/a0a33a259c4028bb4952620e87d26637/${latitude},${longitude}?lang=en&units=us`
  
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      const currentTemperature = body.currently.temperature
      const probOfParticipation = body.currently.precipProbability
      const dailySummary = body.daily.data[0].summary
      callback(undefined, `${dailySummary} It is currently ${currentTemperature} degrees out. There is a ${probOfParticipation}% chance of snow.`)
    }
  })
}

module.exports = forecast