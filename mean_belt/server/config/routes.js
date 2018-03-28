var path = require('path'),
	pets = require("../controllers/pets")

module.exports = (app) => {
	app.get('/pets', pets.index);
	app.post('/pets', pets.create);
	app.get('/pets/:id', pets.show);
	app.put('/edit/:id', pets.update);
	app.post('/like', pets.like);
	app.delete('/pets/:id', pets.destroy);


	app.all("*", (req, res, next) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}