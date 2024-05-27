const mongoose = require ('mongoose')


const OrderSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  products: [{
    name: String,
    quantity: Number
    }],
    
    totalamount: {
    type: Number,
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now
  }
});

const OrderModel = mongoose.model("orders", OrderSchema)

module.exports = OrderModel;