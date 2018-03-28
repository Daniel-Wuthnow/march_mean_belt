var mongoose = require('mongoose');

var PetSchema = new mongoose.Schema({
	name:{
		type: String,
		require: [true, "Name is Required."],
		minlength: [3, "Names must be atleast 3 Charactors long."]
	},
	type:{
		type: String,
		require: [true, "Type is Required."],
		minlength: [3, "Type must be atleast 3 Charactors long."]
	},
	description:{
		type: String,
		require: [true, "Description is Required."],
		minlength: [3, "Description must be atleast 3 Charactors long."]
	},
	likes:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Likes'
	}]

}, {timestamps: true});

module.exports = mongoose.model('Pet', PetSchema);