import PizzaPost from '../models/PizzaPost.js';
import mongoose from 'mongoose';

export const getAllPost = async (req, res) => {
    try {
        const posts = await PizzaPost.find();

        res.status(200).json(posts);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPost = async (req, res) => {
    const { name, description, image, price } = req.body;

    const newPost = new PizzaPost({ name, description, image, price });

    try {
        await newPost.save();

        res.status(200).json(newPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getOnePost = async (req, res) => {
    try {
        const post = await PizzaPost.findById(req.params.id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { name, description, image, price } = req.body;

        const updatePost = { name, description, image, price, _id: id };

        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

        await PizzaPost.findByIdAndUpdate(id, updatePost, { new: true });

        res.json(updatePost);
};

export const deletePost = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PizzaPost.findByIdAndDelete(id);

    res.status(201).json({message: "Post deleted successfully"});
};