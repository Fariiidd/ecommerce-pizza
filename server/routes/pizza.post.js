import express from 'express';

import { getAllPost, createPost, getOnePost, updatePost, deletePost } from '../controllers/pizza.post.controllers.js';

const router = express.Router();

router.get('/', getAllPost);
router.post('/', createPost);
router.get('/:id', getOnePost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;