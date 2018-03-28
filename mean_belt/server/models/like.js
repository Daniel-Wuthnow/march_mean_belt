var mongoose = require('mongoose');

var LikeSchema = new mongoose.Schema({
	_pet:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Pet'
	}
}, {timestamps: true});

module.exports = mongoose.model('Like', LikeSchema);