const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack(webpackConfig);

const stripe = require("stripe")(
  "pk_test_70MtLXBhCT7AK7iMzXqxdtEC"
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
  console.log(req.body)
  res.send('babo')
})
app.post('/charge',(req, res) => {
  // const token = req.body.stripeToken; // Using Express
  // const price = req.body.price; // Using Express
  console.log(req.body)
  res.send('TEST')
  // const charge = stripe.charges.create({
  //   amount: price,
  //   currency: 'usd',
  //   description: 'Example charge',
  //   source: token,

  // const amount = 2500;
  
  // stripe.customers.create({
  //   email: req.body.stripeEmail,
  //   source: req.body.stripeToken
  // })
  // .then(customer => stripe.charges.create({
  //   amount,
  //   description: 'Web Development Ebook',
  //   currency: 'usd',
  //   customer: customer.id
  // }))
  // .then(charge => res.render('success'));
  // });
})


/**
 * Listen to Port
 */
app.listen(PORT, console.log('listening port ' + PORT));