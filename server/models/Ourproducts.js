const mongoose = require('mongoose');

const OurproductsSchema = new mongoose.Schema({
  imgUrl: String,
  price: Number,
  product: String,
  volume: Number,
});

const OurproductsModel = mongoose.model("ourproducts", OurproductsSchema);

module.exports = OurproductsModel;
