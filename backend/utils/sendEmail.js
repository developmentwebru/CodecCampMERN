const nodemailer = require('nodemailer');

const sendEmail = async options => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: '2525',
        auth: {
            user: 'db64cd99fa85d1',
            pass: '57ea9ef7e2ab54'
        }
    });

    const message = {
        from: `${'ShopIT'} <${'noreply@shopit.com'}>`,
        to: options.email,
        subject: options.subject,
        text: options.message

    }

    await transporter.sendMail(message)
}

module.exports = sendEmail;