import express from 'express';


//Defining router
const router = express.Router();

//importing controllers
import { getPosts, createPost, updatePost, deletePost} from '../controllers/posts.js';

//Defining routes
router.get('/', getPosts);
router.post('/create', createPost);
router.patch('/update/:id', updatePost);
router.delete('/:id', deletePost);



export default router;