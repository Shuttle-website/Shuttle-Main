const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (shipping_fee, total_amount) => {
  return shipping_fee + total_amount;
};

const paymentController = async (req, res) => {
  const { shipping_fee, total_amount, shipping } = req.body;

  try {
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: calculateOrderAmount(shipping_fee, total_amount),
    //   currency: 'inr',
    //   description: 'Paying for shopping'
    // });
    // return res.status(200).json({
    //   clientSecret: paymentIntent.client_secret,
    //   sessionId:paymentIntent.sessionId
    // });

    const products=[
      {
        dish:"something",
        imgData:"https://plus.unsplash.com/premium_photo-1681140029775-36a657447c4f?auto=format&fit=crop&q=80&w=1885&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:100,
        qnty:2
      },
      {
        dish:"something",
        imgData:"https://plus.unsplash.com/premium_photo-1681140029775-36a657447c4f?auto=format&fit=crop&q=80&w=1885&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:100,
        qnty:2
      }
    ]

    const lineItems = products.map((product)=>({
      price_data:{
          currency:"inr",
          product_data:{
              name:product.dish,
              images:[product.imgdata]
          },
          unit_amount:product.price * 100,
      },
      quantity:product.qnty
  }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types:["card"],
      line_items:lineItems,
      mode:"payment",
      success_url:"http://localhost:8080/sucess",
      cancel_url:"http://localhost:8080/cancel",
    });

    res.json({id:session.id})

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = paymentController;
