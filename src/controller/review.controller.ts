import express, { Request, Response } from "express";
import {getReview, getReviewById, createReview,updateReview,deleteReview } from '../service/review.service';
const route = express.Router()


route.get('/', async function (req:Request, res:Response) {
    try {
        const review = await getReview()
        res.status(200).send(review)
    } catch (error:any) {
        res.status(404).send(error.message)
    }
})

route.get('/:id', async function (req:Request, res:Response) {
    try {
        const { id } = req.params
        const review = await getReviewById(id)
        res.status(200).send(review)
    } catch (error:any) {
        res.status(404).send(error.message)
    }
})

route.post('/', async function (req:Request, res:Response) {
    try {
        const { title } = req.body
        const review = await createReview(title)
        res.status(200).send(review)
    } catch (error:any) {
        res.status(404).send(error.message)
    }
})

route.put('/:id', async function (req:Request, res:Response) {
    try {
        const { id } = req.params
        const { title } = req.body
        const review = await updateReview(id,title)
        res.status(200).send(review)
    } catch (error:any) {
        res.status(404).send(error.message)
    }
})

route.delete('/:id', async function (req:Request, res:Response) {
    try {
        const { id } = req.params
        const review = await deleteReview(id)
        res.status(200).send(review)
    } catch (error:any) {
        res.status(404).send(error.message)
    }
})
  


export default route