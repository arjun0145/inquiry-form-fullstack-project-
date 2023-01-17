import express from 'express'
import { configureDb } from './src/connectiondb/configuredb.js'
import cors from 'cors'
import inquiryRouter from './src/router/inquiryrouter.js'
const app = express()
app.use(cors())
app.use(express.json()) 
app.use(inquiryRouter)
configureDb()
app.listen(9600,()=>{
    console.log("server is running on port 9600")
;
})