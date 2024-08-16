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
/* mail sending */
app.post('/send-mail', (req, res) => {
    const { name, email, message } = req.body
    /* send email to the admin */
    const emailOptions = {
        from: process.env.MAIL_FROM_ADDRESS,
        to: process.env.MAIL_USERNAME,
        subject: `Message from ${name}`,
        text: `Message from ${name} ${email}`,
        html: `<p>Message from ${name} ${email}:</p>
            <p>${message}</p>`
    }
    emailService.sendEmail(emailOptions)
    /* send confirmation email to the sender */
    const confirmationEmailOptions = {
        from: process.env.MAIL_FROM_ADDRESS,
        to: email,
        subject: 'Confirmation',
        text: 'Thank you for your message',
        html: '<p>Thank you for your message</p>'
    }
    emailService.sendEmail(confirmationEmailOptions)
    res.json({ message: 'Email sent' })
})
/* message in the console server is running */
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})