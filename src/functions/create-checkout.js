const stripe = require('stripe')(process.env.STRIPE_API_SECRET);
const products = require('../site/_data/products')()

exports.handler = async ({ body }) => {
    console.log(process.env.STRIPE_API_SECRET)
    try {
        const { sku, quantity } = JSON.parse(body)
        const product = products.find(p => p.sku === sku)
        const validatedQuantity = quantity > 0 && quantity <= 5 ? quantity : 1

        console.log(product)
        
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'usd',
                    unit_amount: product.amount,
                    product_data: {
                        name: product.name,
                        description: product.description,
                        images: [product.image],
                    }
                },
                quantity: validatedQuantity,
                },
                {
                    price_data: {
                        currency: 'usd',
                        unit_amount: 300,
                        product_data: {
                            name: 'Shipping and Handling',
                            description: 'Flat rate shipping anywhere in the USA!',
                            images: [],
                        }
                    },
                quantity: 1,
                },
            ],
            shipping_address_collection: {
                allowed_countries: ['US']
            },
            mode: 'payment',
            success_url: 'https://ericraslich.com/purchased',
            cancel_url: 'https://ericraslich.com/',
        })
    
        return {
            statusCode: 200,
            body: session.id
        }
    } catch (error) {
        console.log(error)
        return {
            statusCode: 500,
            body: error.toString()
        }
    }
}