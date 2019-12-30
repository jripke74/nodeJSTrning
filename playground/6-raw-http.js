const https = require('https')

const url = `https://api.darksky.net/forecast/a0a33a259c4028bb4952620e87d26637/40,-75?lang=en&units=us`

const request = https.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    data = data + chunk.toString()
  })

  response.on('end', () => {
    const body = JSON.parse(data)
    console.log(body)
  })

})

request.on('error', (error) => {
  console.log('An error', error)
})

request.end()