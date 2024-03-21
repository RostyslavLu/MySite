const nodemailer = require('nodemailer')
const smtpConfig = require('./smtp.config')
const transporter = nodemailer.createTransport(smtpConfig)

async function sendEmail(emailOptions) {
    try {
        const info = await transporter.sendMail(emailOptions)
        console.log('Email sent: ' + info.response)
        return true
    } catch (error) {
        console.error('Error sending email: ', error)
        return false
    }
}

module.exports = { sendEmail }