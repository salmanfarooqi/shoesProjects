const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  products: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      // required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    zipCode:String,
    address:String,
    totalAmount:Number
    
  }],
  totalAmount: {
    type: Number,
    required: true
  },
  zipCode:String,
  address:String,
  phone:String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
