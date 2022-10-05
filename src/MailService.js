const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.API_KEY)
const OTPMailer = (email, name, sub, msge) => {
    const msg = {
        to: email,
        from: {
            name: name,
            email: process.env.USER
        },
        subject: sub,
        text: msge
    }
    sgMail.send(msg).then(res => console.log(`Email send at ${email}`)).catch((error) => console.log(error))
}
module.exports = OTPMailer