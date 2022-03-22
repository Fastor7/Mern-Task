const mongoose = require('mongoose');


const restaurantSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  address: { type: String, default: '' },
	image:{ type: String, default: '' }
},{timestamps : true})

module.exports = mongoose.model('restaurant', restaurantSchema);
