import express from 'express';
import { createPost,getAllPosts,getPost,updatePost,deletePost,createContact } from '../controller/post-controller.js';
import {uploadImage,getImage} from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const router = express.Router();


router.post("/create",createPost);
router.post("/contact/createcontact",createContact);

router.get("/posts" ,getAllPosts);
router.get("/posts/:id" ,getPost);

router.post("/update/:id",updatePost);

router.delete("/delete/:id",deletePost);

router.post("/file/upload",upload.single('file'),uploadImage);
router.get('/file/:filename',getImage);






export default router;