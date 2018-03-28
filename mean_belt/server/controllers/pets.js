var Pet = require('../models/pet');
var Like = require('../models/like');

module.exports = {
	index: (req, res) => {
		Pet.find({}, (err, pets) => {
			if (err) {
				return res.status(400).json(err)
			}
			console.log(pets)
			return res.json(pets);
		});
	},
	create: (req, res) => {
		const pet = new Pet(req.body)

		Pet.findOne({name: req.body.name}, (err, name)=>{
			if (name) {
				console.log("found a name")
				return res.status(400).json(err)
			} else {
				pet.save( (err) => {
				if (err) {
					console.log(err)
					return res.status(400).json(err);
				}
					return res.json(pet);
				})
			}
		})
		
	},

	show: (req, res) => {
		Pet.findOne({_id: req.params.id}, (err, pet) =>{
			if (err) {
				return res.status(400).json(err);
			}

			return res.json(pet)
		})
	},

	update: (req, res) => {
		Pet.update({_id: req.params.id}, {name: req.body.name, type: req.body.type, description: req.body.description}, {runValidators: true}, (err, pet) => {
			if (err) {
				return res.status(400).json(err);
			} 
			return res.json(pet)
		})
	},

	destroy: (req, res) => {
		Pet.remove({_id: req.params.id}, (err) => {
			if (err) {
				console.log("destroy error", err)
			}
			return res.json()
		})
	},

	like: (req, res) => {
		const like = new Like(req.body);
		// console.log("in controller", like)
		like.save((err) =>{
			if (err) {
				return res.json("in pets.js",err)
			}
			Pet.findByIdAndUpdate(
				like._pet,
				{
					$push: {likes: like}
				}
			);
			return res.json(like);
		})
	}
}