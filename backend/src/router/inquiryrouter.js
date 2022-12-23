import express from 'express'
import { Fetchdata, Savedata } from '../controller/inquirycontroll.js'

const inquiryRouter = express.Router()
console.log("ak");
inquiryRouter.post ('/save', Savedata)
inquiryRouter.get('/getdata', Fetchdata)


export default inquiryRouter ; 
