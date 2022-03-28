import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import postPizza from './routes/pizza.post.js';

const app = express();
dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/post', postPizza);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECT)
    .then(() => app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))
    .catch((error) => console.log(error))