const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'saferio17@outlook.com',
        subject: 'Thanks for joining',
        text: `Welcome to the app,${name} hope you enjoy using it`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'saferio17@outlook.com',
        subject: 'Thanks for travelling with us!',
        text: `Hi ${name}, hope the app is useful`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}