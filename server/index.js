import express from "express"
import cors from "cors"
import morgan from "morgan"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import helmet from "helmet"
import mongoose from "mongoose"

//configurations
dotenv.config();
const app=express();
app.use(helmet());
app.use(cors())
app.use(morgan("common"))
app.use(express.json())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

console.log("hello uganda")