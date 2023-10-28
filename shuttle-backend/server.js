// load env-vars
require('dotenv').config();

// requiring dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const jwt = require('jsonwebtoken');

// initialize express
const app = express();

// requiring routers
const paymentRouter = require('./routes/paymentRouter');
const productRouter = require('./routes/productRouter');
const adminRouter = require('./routes/adminRouter');
const orderRouter = require('./routes/orderRouter');
const uploadRouter = require('./routes/uploadRouter');
const NewArrivals = require('./routes/NewArrivals');

// requiring middlewares
const errorMiddleware = require('./middleware/Error');

// require db configs
const connectToDb = require('./config/db');

// require cloudinary configs
const cloudinary = require('./config/cloudinary');
const User = require('./models/User');

// uncaught exception
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server shutting down due to uncaught exception`);
  process.exit(1);
});

// connect to db
connectToDb();

// using middlewares
app.use(
  cors({
    origin: [/netlify\.app$/, /localhost:\d{4}$/],
    credentials: true,
  })
);
app.use(express.json({ limit: '20mb' }));
app.use(cookieParser());

// basic api route
// app.get('/', (req, res) => {
//   return res.status(200).json({
//     success: true,
//     message: 'API service running 🚀',
//   });
// });

app.get('/', (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'API service running 🚀',
  });
});


// app.post('/create', async (req, res) => {
//   try {
    
//     const { first_name, last_name, email, password } = req.body;
//     const newUser = new User({ first_name, last_name, email, password });
//     await newUser.save();
//     console.log(first_name,last_name,email,password);
//     console.log("/create successfull");
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


app.post('/create', async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      // Email already exists
      return res.status(400).json({ error: 'Email already in use' });
    }

    const newUser = new User({ first_name, last_name, email, password });
    await newUser.save();
    console.log(first_name, last_name, email, password);
    console.log("/create successful");
    res.status(201).json({ message: 'Account created' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


app.post('/login', async (req, res) => {
  try {
    
    const {email, password } = req.body;
    console.log("Password->>>",password);
    const user = await User.findOne({email});
    console.log("User FOund::->",user);
    console.log(user.password === password);
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    // Compare the provided password with the stored password
    else if (user.password === password) {
      // Passwords match, so the login is successful

      const token = jwt.sign({
        first_name: user.first_name,
        email: user.email,
      },'secrete123')


      return res.status(200).json({ message: 'Login successful', user: token });
    } 
    else {
      return res.status(401).json({ message: 'Incorrect password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});





app.post('/googlelogin', async (req, res) => {
  try {
    
    const {googleCredential} = req.body;
    console.log(req.body.googleCredential);
    const user = await User.findOne({email:googleCredential.email});
    console.log("User FOund::->",user);
    // console.log(user.password === password);
    
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
    // Compare the provided password with the stored password
    
    const token = jwt.sign({
      first_name: user.first_name,
      email: user.email,
    },'secrete123')


    return res.status(200).json({ message: 'Login successful', user: token });
   
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});











app.get("/newArrival", async (req, res) => {
  MongoClient.connect(url).then((client) => {
    const connect = client.db("SAdmin");
    const collection = connect.collection("newarrivals")
    collection.find({})
      .toArray().then((data) => {
        res.json(data)
      });
  })
});


app.get("/products", async (req, res) => {
  MongoClient.connect(url).then((client) => {
    const connect = client.db("SAdmin");
    const collection = connect.collection("products")
    collection.find({})
      .toArray().then((data) => {
        res.json(data)
      });
  })
});

// using routers
app.use('/api/payment', paymentRouter);
app.use('/api/products', productRouter);
app.use('/api/admin', adminRouter);
app.use('/api/orders', orderRouter);
app.use('/api/upload', uploadRouter);
app.use('/api/newArrival', NewArrivals);

// using other middlewares
app.use(errorMiddleware);

// starting server
const server = app.listen(process.env.PORT || 5000, () => {
  console.log('Server running');
});

// unhandled promise rejection
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Server shutting down due to unhandled promise rejection`);
  server.close(() => {
    process.exit(1);
  });
});
