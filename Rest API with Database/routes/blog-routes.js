import express from 'express'
import { addBlogs, deleteById, getAllBlocks, getById, updateBlog } from '../controller/blog-controller.js'

const blogRouter = express.Router()

blogRouter.get("/",getAllBlocks)
blogRouter.post("/add",addBlogs)
blogRouter.put('/update/:id',updateBlog)
blogRouter.get('/:id',getById)
blogRouter.delete('/:id',deleteById)

export default blogRouter;