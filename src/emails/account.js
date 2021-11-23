const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'carlosbenjumeac99@gmail.com',
        subject: 'Welcome to Task App',
        text: 'Welcome to the app, ' + name + '. Thanks for joining in to my new app! Let me know how you get along with the app.'
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'carlosbenjumeac99@gmail.com',
        subject: 'Task App account cancelation',
        text: 'Good bye,' + name + ' we`re sorry to hear that you want to leave us. We want to know why you want to cancel your account. Reply to this mail to let us know! Good luck!'
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}