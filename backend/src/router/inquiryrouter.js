import express from 'express'
import { Fetchdata, Savedata ,DeleteData, updatedata} from '../controller/inquirycontroll.js'


const inquiryRouter = express.Router()
inquiryRouter.post ('/save', Savedata)
inquiryRouter.get('/getdata', Fetchdata)
inquiryRouter.delete("/deletedata/:id",DeleteData)
inquiryRouter.put("/updatedata/:id",updatedata)



export default inquiryRouter ; 
