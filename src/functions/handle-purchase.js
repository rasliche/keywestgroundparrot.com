const stripe = require('stripe')(process.env.STRIPE_API_SECRET);
const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

// Netlify sends the event object which is deconstructed below to the headers and body
exports.handler = async ({ headers, body }) => {
    // verify webhook signature
    let event
    try {
        event = stripe.webhooks.constructEvent(
            body, 
            headers['stripe-signature'], 
            process.env.STRIPE_WEBHOOK_SECRET)

        if (event.type !== 'checkout.session.completed') {
            return {
                statusCode: 400,
                body: `Webhook Error: ${error.message}`
            }
        }

        const items = await stripe.checkout.sessions.listLineItems(event.data.object.id);

        const order = event.data.object
        
        // read out the shipping address
        const {
            line1,
            line2,
            city,
            state,
            postal_code,
            country
        } = order.shipping.address

        // read out the line items and format email

        
        const msg = {
            to: process.env.FULFILLMENT_EMAIL_ADDRESS,
            from: process.env.FULFILLMENT_EMAIL_ADDRESS,
            subject: 'New Order from KeyWestGroundParrot.com!',
            text: `
Items:
${items.map(item => `- (${item.quantity}) ${item.id}`).join('\n')}
        
Shipping Address:
${order.shipping.name}
${line1}${line2 !== null ? '\n' + line2 : ''}
${city}, ${state} ${postal_code}
${country}
`,
        };
        // send email
        await mail.send(msg);
        
        return {
            statusCode: 200,
            body: JSON.stringify({ received: true })
        }
    } catch (error) {
        return {
            statusCode: 400,
            body: `Webhook Error: ${error.message}`
        }
    }
}