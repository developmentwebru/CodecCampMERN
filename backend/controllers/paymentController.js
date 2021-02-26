const catchAsyncErrors = require('../middlewares/catchAsyncErrors')

const stripe = require('stripe')('sk_test_51INi5YG5aXvZ9BD0EhytOffWVCFvD8jXwCfYpMyPZSqpIoiYnYuID56gT4PvD1kJrMvlaGg5HxTp7PoLB0MJFqfA00jXMzugki');

//Process stripe payments => /api/v1/payment/process
exports.processPayment = catchAsyncErrors(async (req, res, next) => {

    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: 'usd',

        metadata: { integration_check: 'accept_a_payment' }
    });

    res.status(200).json({
        success: true,
        client_secret: paymentIntent.client_secret
    })

})

//send stripe API key => /api/v1/stripeapi
exports.sendStripeApi = catchAsyncErrors(async (req, res, next) => {

    res.status(200).json({
        stripeApiKey: 'pk_test_51INi5YG5aXvZ9BD0mmSxyJjjrhwhhPgbn1q4R7mHEl6sQd1dyuCK5yNIPkT7uxADMC38EJv1Nb5VCatqzmuFGmzS00svgMSb7N'
    })

})
