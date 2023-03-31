import express from "express";
import getQuote from "./controller.js";

const router = express.Router();

router.get('/',(req,res) =>{
    res.json({
        status: 200,
        message: 'API is Okay',
        credit: 'Irfan Akbari Habibi'
    })
})

router.get('/quote',getQuote)

export default router