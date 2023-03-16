const express = require('express');
const app = express();
const mongoose = require('mongoose');
const routes = require('./MealRoutes');
const cors = require('cors');


require('dotenv').config();

mongoose.set("strictQuery", false);

const PORT = 4000 || process.env.port;

app.use(express.json())
app.use(cors())

mongoose
.connect(process.env.MONGODB_LINK)
.then(() => console.log('we were here'))
.catch((err) => console.log('Error!'))

app.use(routes);

app.listen(PORT, () => {
    console.log(`i am in ${PORT}`)
})

