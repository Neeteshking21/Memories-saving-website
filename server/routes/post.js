import express from 'express'
import { getPosts } from '../controller/post.js'
const router = express.Router()

router.post('/', getPosts)

export default router