const https = require('https')
const url = `https://api.darksky.net/forecast/aada64998500b94d2f2e094441e903ea/44,-101?/lang=en`

const request = https.request(url, (response) => {
  let data = ''

  response.on('data', (chunk) => {
    data += chunk.toString()
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