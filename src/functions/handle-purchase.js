const stripe = require('stripe')(process.env.STRIPE_API_SECRET);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

// Netlify sends the event object which is deconstructed below to the headers and body
exports.handler = async ({ headers, body }) => {
    // TODO verify webhook signature
    const signature = headers['stripe-signature']
    let event
    try {
        event = stripe.webhooks.constructEvent(body, signature, endpointSecret)
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object
            console.log(session)
    
            const msg = {
            to: 'rasliche@gmail.com',
            from: 'rasliche@gmail.com',
            subject: 'New Order from KeyWestGroundParrot.com!',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
            };
            mail.send(msg);
        }
        // TODO read out the shipping address
        // TODO read out the line items
    
        // TODO send email
    
        return {
            statusCode: 200,
            body: 'todo'
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: `Webhook Error: ${error.message}`
        }
    }

}