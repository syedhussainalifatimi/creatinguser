const express = require ('express')
const mongoose = require ('mongoose')
const cors = require ('cors')
const UserModel = require('./models/Users')
const HotproductsModel = require('./models/Hotproducts')
const OurproductsModel = require ('./models/Ourproducts')
const OrderModel = require('./models/Orders')


const app = express()
app.use(cors())
app.use(express.json())

// to connect with mongodb compass
mongoose.connect("mongodb://127.0.0.1:27017/test")

//getdata from users.jsx from test/users mongodbcompass
app.get('/getUsers', (req, res) =>{
  UserModel.find()
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

//post data to users.jsx to test/users mongodbcompass
app.post('/postUsers', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    const users = await UserModel.findOne({ email: email });
    if (users) {
      return res.status(409).json({ error: "Already have an account" });
    } else {
      const result = await UserModel.create({ name: name, email: email, password: password, confirmPassword: confirmPassword });
      return res.json("Account created");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

app.post('/postOrders', async (req, res) => {
  const { username, email, address, contact, products, totalamount, orderDate } = req.body;
  try {
    const result = await OrderModel.create({
      username,
      email,
      address,
      contact,
      products,
      totalamount,
      orderDate
    });

    return res.json("Order Posted");
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.get('/getHotproducts', (req, res) => {
  HotproductsModel.find()
    .then(hotproducts => res.json(hotproducts))
    .catch(err => res.status(500).json(err));
});

app.get('/getOurproducts', (req, res) => {
  OurproductsModel.find()
    .then(ourproducts => res.json(ourproducts))
    .catch(err => res.status(500).json(err));
});


const port = 3001;
app.listen(port, () => {
  console.log(`Connected to port http://localhost${port}`)
})
