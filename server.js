const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

const stripe = require("stripe")(
  "sk_test_2t14hooA7bPXlUxKDcoWxHEm"
);

// define port
const PORT = process.env.PORT || 3000;


app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

/**
 * Middleware for bodyParser
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * serve index.html
 */
app.use(express.static(__dirname + '/images'));
app.use(express.static(__dirname + '/public'));
app.get('/data.json', ((req, res) => {
  res.sendFile(__dirname + '/product-payload.json')
}))

app.post('/gettoken',(req,res) => {
  const price = req.body.price
  const email = req.body.email;
  console.log(req.body)
  stripe.customers.create({
    email: email,
    source: req.body.stripeToken
  })
  .then(customer => 
    stripe.charges.create({
    amount: price,
    description: 'Nike Shoes',
    currency: 'usd',
    customer: customer.id
  })).then(charge => res.redirect('/#/success'));
})

const coupon153 = stripe.coupons.create({
  duration: 'once',
  id: 'EZ3535',
  percent_off: 15
});

const coupon15 = stripe.coupons.create({
  duration: 'once',
  id: 'FREESHOOTING',
  amount_off: 15
});

const coupon35 = stripe.coupons.create({
  duration: 'once',
  id: 'BABYDC',
  amount_off: 15
});
/**
 * Listen to Port
 */
app.listen(PORT, console.log('listening port ' + PORT));