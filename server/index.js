const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const emailService = require('./email.service.js')
require('dotenv').config()

const corsOptions = {
    origin: 'http://localhost:8080'
}
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the server' })
})

app.post('/send-mail', (req, res) => {
    const { name, email, message } = req.body
    const emailOptions = {
        from: process.env.MAIL_FROM_ADDRESS,
        to: process.env.MAIL_USERNAME,
        cc: email,
        subject: `Message from ${name}`,
        text: `Message from ${name} ${email}`,
        html: `<p>Message from ${name} ${email}:</p>
            <p>${message}</p>`
    }
    emailService.sendEmail(emailOptions)

    res.json({ message: 'Email sent' })
})
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})