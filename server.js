const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const items = require('./routes/api/items');

//init app
const app = express();

//bodyparser middleware
app.use(
	bodyParser.urlencoded({ extended: false })
);
app.use(bodyParser.json());

//mongodb config
const db = require('./config/keys').mongoURI;

//coonnect mongoDb
mongoose
	.connect(db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('MongoDB connected...');
	})
	.catch((err) => {
		console.log(err);
	});

//use routes
app.use('/api/items', items);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`server started on port ${port}`);
});
