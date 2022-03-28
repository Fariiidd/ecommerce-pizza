import mongoose from 'mongoose';

const postSchemma = mongoose.Schema({
    name: String,
    description: String,
    price: String,
    image: String,
});

const PizzaPost = mongoose.model("pizzaPost", postSchemma);

export default PizzaPost;