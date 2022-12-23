import express from 'express'
import { configureDb } from './src/connectiondb/configuredb.js'
import cors from 'cors'
import inquiryRouter from './src/router/inquiryrouter.js'
const app = express()

const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }
 
app.use(cors(corsOptions))
app.use(express.json()) 
app.use(inquiryRouter)
configureDb()
app.listen(9200,()=>{
    console.log("server is running on port 9200")
;
})