const mongoose = require('mongoose');

const HotproductsSchema = new mongoose.Schema({
  imgUrl: String,
  price: Number,
  product: String,
  volume: Number,
});

const HotproductsModel = mongoose.model("hotproducts", HotproductsSchema);

module.exports = HotproductsModel;
