require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(morgan('dev'));

app.use("/api",require('./routes'))

app.listen(PORT,() =>{
	console.log(`listening on port ${PORT}`)
})
